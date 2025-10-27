import Notes from "../models/Notes.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Notes.find().sort({ createdAt: -1 }); //newest first
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Error in getAlNotes" });
  }
}

export async function getNotesById(req, res) {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNotesById controller", error);
    res.status(500).json({ message: "Error in getNotesById" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Notes({ title, content });

    const savednote = await note.save();
    res.status(201).json(savednote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Error in createNote" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Error in updateNote" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Notes.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Error in deleteNote" });
  }
}
