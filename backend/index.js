import express from "express";
import cors from "cors";
import notes from "./data/notes.js";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to backend world").status(201);
});

app.get("/api/notes", (req, res) => {
  {
    res.json(notes);
  }
});

app.get("/api/notes/:id", (req, res) => {
  try {
    const note = notes.find(n => n._id === req.params.id);
    res.status(200).send(note);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, console.log(`app runing on http://localhost:${PORT}`));
