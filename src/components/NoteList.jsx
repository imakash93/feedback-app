import React from "react";
import NoteItem from "./NoteItem";
import { motion, AnimatePresence } from "framer-motion";
import NotesContext from "../context/NotesContext";
import { useContext } from "react";
import Spinner from "./shared/Spinner";

function NoteList() {
  const { notes, isLoading } = useContext(NotesContext);
  if (!isLoading && (!notes || notes.length === 0)) {
    return <p>No Notes</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
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

  return;
}

export default NoteList;
