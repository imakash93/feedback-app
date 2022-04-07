import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import NotesContext from "../context/NotesContext";
import { useContext } from "react";
function NoteItem({ item }) {
  //   const [raing, setRaing] = useState(7);
  //   const [text, setText] = useState("lorum ipsum");
  //   const handleClick = () => {
  //     setRaing((prev) => {
  //       return prev + 1;
  //     });
  //   };

  const { deleteNote, editNote } = useContext(NotesContext);

  return (
    <Card>
      <div className="num-display">{item.day}</div>
      <button className="close" onClick={() => deleteNote(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editNote(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default NoteItem;
