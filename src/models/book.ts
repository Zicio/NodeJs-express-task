import { model, Schema } from "mongoose";
import { BookModel } from "./models";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  authors: {
    type: String,
    required: true,
  },
  favorite: {
    type: String,
  },
  fileCover: {
    type: String,
  },
  fileName: {
    type: String,
  },
  fileBook: {
    type: String,
  },
});

const Book = model<BookModel>("Book", bookSchema);

export default Book;
