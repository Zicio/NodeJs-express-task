import { IBook } from "../../models/models";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import library from "../../data/library";

const createBookRequest = async (req: Request, res: Response) => {
  console.log(req.body);
  const newBook: IBook = await req.body;
  newBook.id = uuidv4();
  console.log(newBook);
  if (req.file) {
    const { path } = req.file;
    newBook.fileBook = path;
  }
  library.push(newBook);
  // res.status(201).json(newBook);
  res.redirect('/book');
};

export default createBookRequest;