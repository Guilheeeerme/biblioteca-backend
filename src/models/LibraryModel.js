import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: Number,
  titulo: { type: String, required: true },
  editora: { type: String, required: true },
  foto: { type: String, required: true },
  autores: { type: [String], required: true },
});

const Library = mongoose.model("Library", schema, "Library");

export default Library;
