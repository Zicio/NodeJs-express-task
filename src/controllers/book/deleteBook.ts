import { Request, Response } from "express";
import container from "../../container";
import { BooksRepository } from "../../models/models";

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // <<<  IoC homework >>>
    const repo = container.get(BooksRepository);
    await repo.deleteBook(id);
    res.redirect(`/book`);
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default deleteBook;
