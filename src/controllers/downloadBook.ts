import { Request, Response } from "express";
import library from "../data/library";

const downloadBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reqBookIndex = library.findIndex((el) => el.id === id);
  if (reqBookIndex !== -1) {
    res.download(
      library[reqBookIndex].fileBook!,
      library[reqBookIndex].fileName!
    );
    return;
  }
  res.status(404).json({ errcode: 404, errmsg: "not found" });
};

export default downloadBook;
