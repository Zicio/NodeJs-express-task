import { Request, Response } from "express";
import library from "../data/library";

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = library.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
    return;
  }

  library.splice(idx, 1);
  res.redirect(`/book`);
};

export default deleteBook;
