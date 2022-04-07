import React from "react";
import Card from "./shared/Card";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import PrioritySelect from "./PrioritySelect";
import NotesContext from "../context/NotesContext";
import { useContext } from "react";

function NoteForm() {
  const [text, setText] = useState("");
  const [day, setDay] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addNote, noteEdit, updateNote } = useContext(NotesContext);

  useEffect(() => {
    if (noteEdit.edit == true) {
      setBtnDisabled(false);
      setText(noteEdit.note.text);
      setDay(noteEdit.note.day);
    }
  }, [noteEdit]);

  const handleTextUpdate = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 characters");
    } else {
      if (day === 0) {
        setBtnDisabled(true);
        setMessage("Please select Day and update text");
      } else {
        setBtnDisabled(false);
        setMessage(null);
      }
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      text,
      day,
    };

    if (noteEdit.edit === true) {
      updateNote(noteEdit.note.id, newNote);
    } else {
      addNote(newNote);
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>Please enter details to remember</h3>
        <PrioritySelect day={(day) => setDay(day)} />
        <div className="input-group">
          <input
            onChange={handleTextUpdate}
            type="text"
            placeholder="Take a note"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default NoteForm;
