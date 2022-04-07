import React from "react";
import { useState, useEffect } from "react";
import NotesContext from "../context/NotesContext";
import { useContext } from "react";

function PrioritySelect({ day }) {
  const [priority, setPriority] = useState(null);
  const handleChange = (e) => {
    setPriority(+e.currentTarget.value);
    day(+e.currentTarget.value);
  };
  const { noteEdit } = useContext(NotesContext);

  useEffect(() => {
    if (noteEdit.edit === true) {
      setPriority(noteEdit.note.day);
    }
  }, [noteEdit]);
  return (
    <ul className="rating">
      {Array.from({ length: 7 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={priority === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default PrioritySelect;
