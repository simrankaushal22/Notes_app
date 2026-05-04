import Note from "../models/note.model.js";

//storing data in database
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "title and content are required" });
    }
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({
      success: true,
      data: newNote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//getting data from database
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(201).json({
      success: true,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//updateNotes
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNotes = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (!updatedNotes) {
      res.status(400).json({
        success: false,
        message: "note not updated",
      });
    }
    res.status(200).json(updatedNotes);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// deleteNotes

export const deleteNotes = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
     return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
   return res
      .status(200)
      .json({ message: "Note deleted successfully", success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
