import { createContext, useState, useEffect } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [noteEdit, setNoteEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await fetch(`/Notes?_sort=id&_order=desc`);

    const data = await response.json();
    setNotes(data);
    setIsLoading(false);
  };

  const deleteNote = async (id) => {
    if (window.confirm("Are you sue?")) {
      await fetch(`/Notes/${id}`, {
        method: "DELETE",
      });
      setNotes(notes.filter((item) => item.id !== id));
    }
  };

  const addNote = async (newNote) => {
    const response = await fetch(`/Notes`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    const data = await response.json();
    setNotes([data, ...notes]);
  };

  const editNote = (note) => {
    setNoteEdit({ note, edit: true });
  };

  const updateNote = async (id, note) => {
    const response = await fetch(`/Notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();

    setNotes(
      notes.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    //setNoteEdit({ note, edit: true });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        deleteNote,
        addNote,
        editNote,
        noteEdit,
        updateNote,
        isLoading,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
