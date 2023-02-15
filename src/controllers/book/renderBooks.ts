import { Request, Response } from "express";
import container from "../../container";
import { BooksRepository } from "../../models/models";

const renderBooks = async (req: Request, res: Response) => {
  try {
    // <<<  IoC homework >>>
    const repo = container.get(BooksRepository);
    const books = await repo.getBooks();
    res.render("views/book/index", {
      title: "Books",
      books: books,
    });
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default renderBooks;
