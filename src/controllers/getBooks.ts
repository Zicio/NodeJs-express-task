import { Request, Response } from "express";
import library from "../data/library";

const getBooks = (req: Request, res: Response) => {
  const { id } = req.params;
  if (id) {
    const reqBookIndex = library.findIndex((el) => el.id === id);
    if (reqBookIndex !== -1) {
      res.status(200).json(library[reqBookIndex]);
      return;
    }
    res.status(404).json({ errcode: 404, errmsg: "not found" });
    return;
  }
  res.status(200).json(library);
};

export default getBooks;
