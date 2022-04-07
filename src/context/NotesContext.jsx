import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "First Note",
      day: 5,
    },
    {
      id: 2,
      text: "2 Note",
      day: 2,
    },
    {
      id: 3,
      text: "3 Note",
      day: 6,
    },
  ]);

  const [noteEdit, setNoteEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteNote = (id) => {
    if (window.confirm("Are you sue?")) {
      setNotes(notes.filter((item) => item.id !== id));
    }
  };

  const addNote = (newNote) => {
    newNote.id = uuidv4();
    console.log(newNote);
    setNotes([newNote, ...notes]);
  };

  const editNote = (note) => {
    setNoteEdit({ note, edit: true });
  };

  const updateNote = (id, note) => {
    setNotes(
      notes.map((item) => (item.id === id ? { ...item, ...note } : item))
    );
    //setNoteEdit({ note, edit: true });
  };

  return (
    <NotesContext.Provider
      value={{ notes, deleteNote, addNote, editNote, noteEdit, updateNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
