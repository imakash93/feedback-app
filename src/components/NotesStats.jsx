import React from "react";
import NotesContext from "../context/NotesContext";
import { useContext } from "react";

function NotesStats() {
  const { notes } = useContext(NotesContext);
  let average =
    notes.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / notes.length;

  return (
    <div className="notes-stats">
      <h4>{notes.length} Reviews</h4>
      <h4> Average Rating {average}</h4>
    </div>
  );
}

export default NotesStats;
