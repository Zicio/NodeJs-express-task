import { Request, Response } from "express";
import library from "../data/library";
import { IBook } from "../models/models";

const editBookRequest = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, authors }: IBook = req.body;
  const idx = library.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }

  library[idx] = {
    ...library[idx],
    title,
    description,
    authors,
  };
  res.redirect(`/book/${id}`);
};

export default editBookRequest;
