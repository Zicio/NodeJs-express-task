import { IBook } from "./../models/models";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import library from "../data/library";

const createBook = async (req: Request, res: Response) => {
  const newBook: IBook = await req.body;
  newBook.id = uuidv4();
  if (req.file) {
    const { path } = req.file;
    newBook.fileBook = path;
  }
  library.push(newBook);
  res.status(201).json(newBook);
};

export default createBook;
