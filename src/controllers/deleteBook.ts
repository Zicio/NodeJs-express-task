import { Request, Response } from "express";
import library from "../data/library";

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reqBookIndex = library.findIndex((el) => el.id === id);
  if (reqBookIndex !== -1) {
    library.splice(reqBookIndex, 1);
    res.status(200).json("ok");
    return;
  }
  res.status(404).json("404 | книга не найдена");
};

export default deleteBook;
