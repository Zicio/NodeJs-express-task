import { Request, Response } from "express";
import { IBook } from "../../models/models";
import Book from "../../models/book";

const editBookRequest = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, authors }: IBook = req.body;

  try {
    await Book.findByIdAndUpdate(id, { title, description, authors });
    res.redirect(`/book/${id}`);
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default editBookRequest;
