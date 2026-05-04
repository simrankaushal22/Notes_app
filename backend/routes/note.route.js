import express from 'express'
import { createNote, deleteNotes, getNotes, updateNote } from '../controllers/note.controller.js'


const router = express.Router()

router.post("/create-note",createNote)
router.get("/getNotes",getNotes)
router.put("/updateNotes/:id",updateNote)
router.delete("/deleteNotes/:id",deleteNotes)

export default router