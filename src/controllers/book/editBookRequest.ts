import { Request, Response } from "express";
import { BooksRepository, IBook } from "../../models/models";
import container from "../../container";

const editBookRequest = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book: IBook = req.body;

  try {
    // // <<<  IoC homework >>>
    const repo = container.get(BooksRepository);
    await repo.editBook(id, book);
    res.redirect(`/book/${id}`);
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default editBookRequest;
