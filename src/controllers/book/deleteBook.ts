import { Request, Response } from "express";
import Book from "../../models/book";

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Book.deleteOne({ _id: id });
    res.redirect(`/book`);
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default deleteBook;
