import { Request, Response } from "express";
import library from "../data/library";

const viewBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = library.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
    return;
  }

  res.render("views/book/view", {
    title: "Book | view",
    book: library[idx],
  });
};

export default viewBook;
