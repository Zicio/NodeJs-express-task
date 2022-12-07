import { IBook } from "../models/models";
import { Request, Response } from "express";

const createBookRender = async (req: Request, res: Response) => {
  res.render("views/book/create", {
    title: "Books | create",
    book: {} as IBook,
  });
};

export default createBookRender;
