import React from "react";
import NoteItem from "./NoteItem";
import { motion, AnimatePresence } from "framer-motion";
import NotesContext from "../context/NotesContext";
import { useContext } from "react";

function NoteList() {
  const { notes } = useContext(NotesContext);
  if (!notes && notes.length === 0) {
    return <p>No Notes</p>;
  }

  return (
    <div className="note-list">
      <AnimatePresence>
        {notes.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NoteItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default NoteList;
