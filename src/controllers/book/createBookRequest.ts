import { BooksRepository, IBook } from "../../models/models";
import { Request, Response } from "express";
import Book from "../../models/book";
import container from "../../container";

const createBookRequest = async (req: Request, res: Response) => {
  const { title, description, authors }: IBook = req.body;
  const newBook = new Book({
    title: title,
    description: description,
    authors: authors,
  });

  try {
    // <<<  IoC homework >>>
    const repo = container.get(BooksRepository);
    await repo.createBook(newBook);
    res.redirect("/book");
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }

  //Для добавления файла
  // if (req.file) {
  //   const { path } = req.file;
  //   newBook.fileBook = path;
  // }
};

export default createBookRequest;
