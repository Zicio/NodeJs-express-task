import { IBook } from "./../models/models";
import { Request, Response } from "express";
import library from "../data/library";

const editBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  let editedBook: IBook = await req.body;
  const reqBookIndex = library.findIndex((el) => el.id === id);
  if (reqBookIndex !== -1) {
    editedBook = {
      ...editedBook,
      id,
    };
    library.splice(reqBookIndex, 1, editedBook);
    res.status(200).json(editedBook);
    return;
  }
  res.status(404).json("404 | книга не найдена");
};

export default editBook;
