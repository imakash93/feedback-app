import React from "react";
import NotesContext from "../context/NotesContext";
import { useContext } from "react";

function NotesStats() {
  const { notes } = useContext(NotesContext);

  const average = Math.round(
    notes.reduce((acc, { day }) => acc + day, 0) / notes.length
  );
  return (
    <div className="notes-stats">
      <h4>{notes.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default NotesStats;
