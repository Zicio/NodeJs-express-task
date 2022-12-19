import { Request, Response } from "express";
import library from "../data/library";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../config/.env") });

const viewBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = library.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
    return;
  }

  // const incrCounter = await fetch(process.env.COUNTER_URL + `${id}/incr`);
  // const counter = await fetch(process.env.COUNTER_URL + `${id}`);
  // console.log(incrCounter.json());
  // console.log(counter.json());

  res.render("views/book/view", {
    title: "Book | view",
    book: library[idx],
  });
};

export default viewBook;
