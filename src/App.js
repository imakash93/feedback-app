import { useState } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NotesStats from "./components/NotesStats";
import NoteData from "./data/NotesData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import NotesReminder from "./components/pages/NotesReminder";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/pages/Post";
import { NotesProvider } from "./context/NotesContext";

function APP() {
  const title = "Reminders & ToDo's";
  // const [notes, setNotes] = useState(NoteData);

  return (
    <NotesProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <h1>{title}</h1>
                  <NoteForm />
                  <NotesStats />
                  <NoteList />
                  <AboutIconLink />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
        </div>
      </Router>
    </NotesProvider>
    // </NotesReminder>
  );
}

export default APP;
