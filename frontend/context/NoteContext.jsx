import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  //GET NOTES
  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await BACKEND_URL.get("/getNotes");
      setNotes(response.data.data);
    } catch (error) {
      console.log("error fetching notes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  //CREATE NOTE
  const createNote = async (note) => {
    try {
      const res = await BACKEND_URL.post("/create-note", note);

      // add new note at top
      setNotes((prev) => [res.data.data, ...prev]);
    } catch (error) {
      console.log("error creating note", error);
    }
  };

  // UPDATE NOTE
  const updateNote = async (id, note) => {
    try {
      const res = await BACKEND_URL.put(`/updateNotes/${id}`, note);

      setNotes((prev) =>
        prev.map((n) => (n._id === id ? res.data.data : n))
      );
    } catch (error) {
      console.log("error updating note", error);
    }
  };

  // DELETE NOTE
  const deleteNote = async (id) => {
    try {
      await BACKEND_URL.delete(`/deleteNotes/${id}`);

      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      console.log("error deleting note", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, loading, createNote, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};