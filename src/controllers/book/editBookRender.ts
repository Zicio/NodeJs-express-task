import { Request, Response } from "express";
import Book from "../../models/book";

const editBookRender = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id).select("-__v");
    res.render("views/book/edit", {
      title: "Book | view",
      book: book,
    });
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default editBookRender;
