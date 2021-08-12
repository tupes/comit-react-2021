import React, { createContext, useEffect, useState } from "react";

import { loadNotes } from "../services/fakeNotesRepository";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadUserNotes = async () => {
      const retrievedNotes = await loadNotes();
      setNotes(retrievedNotes);
    };
    loadUserNotes();
  }, []);

  const getNote = (id) => {
    return notes.find((note) => note.id === id);
  };

  return (
    <NotesContext.Provider value={{ notes, getNote }}>
      {children}
    </NotesContext.Provider>
  );
}
