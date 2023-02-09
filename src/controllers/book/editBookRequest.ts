import { Request, Response } from "express";
import {BooksRepository, IBook} from "../../models/models";
import Book from "../../models/book";
import container from "../../container";

const editBookRequest = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, authors }: IBook = req.body;

  try {
    // // <<<  IoC homework >>>
    // const repo = container.get(BooksRepository);
    // await repo.editBook(id);
    await Book.findByIdAndUpdate(id, { title, description, authors });
    res.redirect(`/book/${id}`);
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default editBookRequest;
