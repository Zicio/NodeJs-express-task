import path from "path";
import { Request, Response } from "express";
import library from "../data/library";

const downloadeBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reqBookIndex = library.findIndex((el) => el.id === id);
  if (reqBookIndex !== -1) {
    // const fileBook = `${path.join(
    //   __dirname,
    //   "../",
    //   "data",
    //   "books",
    //   `${library[reqBookIndex].fileName}.${library[reqBookIndex].fileCover}`
    // )}`;
    res.download(library[reqBookIndex].fileBook!);
    return;
  }
  res.status(404).json("404 | книга не найдена");
};

export default downloadeBook;
