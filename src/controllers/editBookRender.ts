import { Request, Response } from "express";
import library from "../data/library";

const editBookRender = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = library.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }

  res.render("views/book/edit", {
    title: "Book | view",
    book: library[idx],
  });
};

export default editBookRender;
