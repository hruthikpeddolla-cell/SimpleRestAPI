const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

let notes = [
    {
        id: 1,
        title: "Learn Node.js",
        content: "Learn REST API using Express"
    },
    {
        id: 2,
        title: "Practice JavaScript",
        content: "Practice arrays and objects"
    }
];

app.get("/notes", (req, res) => {
    res.json(notes);
});

app.get("/notes/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const note = notes.find(note => note.id === id);

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    // Send the note
    res.json(note);
});

app.post("/notes", (req, res) => {

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    const newNote = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
        title: title,
        content: content
    };

    notes.push(newNote);
    res.status(201).json(newNote);
});

app.put("/notes/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const note = notes.find(note => note.id === id);

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    const { title, content } = req.body;

    if (title) {
        note.title = title;
    }

    if (content) {
        note.content = content;
    }

    // Send updated note
    res.json(note);
});

app.delete("/notes/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    const deletedNote = notes.splice(noteIndex, 1);

    res.json({
        message: "Note deleted successfully",
        note: deletedNote[0]
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});