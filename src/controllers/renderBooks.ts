import { Request, Response } from "express";
import Book from "../models/book";

const renderBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().select("-__v");
    res.render("views/book/index", {
      title: "Books",
      books: books,
    });
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default renderBooks;
