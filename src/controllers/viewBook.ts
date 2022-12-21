import { Request, Response } from "express";
import library from "../data/library";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../config/.env") });

interface IValueOfCounter {
  message: string;
  counter?: string;
}

const viewBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = library.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
    return;
  }

  let view = 0;
  try {
    const incrCounter = await fetch(`${process.env.COUNTER_URL}/${id}/incr`, {
      method: "POST",
      body: JSON.stringify({ task: "Увеличить" }),
    });
    const counter = await fetch(`${process.env.COUNTER_URL}/${id}`);
    const incr = await incrCounter.json();
    const valueOfCounter: IValueOfCounter = await counter.json();
    view = +(valueOfCounter.counter as string);
  } catch (e) {
    console.log(e);
  }

  res.render("views/book/view", {
    title: "Book | view",
    book: library[idx],
    view: view,
  });
};

export default viewBook;
