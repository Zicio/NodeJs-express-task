import { Request, Response } from "express";
import * as dotenv from "dotenv";
import path from "path";
import { BooksRepository } from "../../models/models";
import container from "../../container";

dotenv.config({ path: path.join(__dirname, "../../config/.env") });

interface IValueOfCounter {
  message: string;
  counter?: string;
}

const viewBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  let view = 0;
  try {
    //Counter
    const incrCounter = await fetch(`${process.env.COUNTER_URL}/${id}/incr`, {
      method: "POST",
      body: JSON.stringify({ task: "Увеличить" }),
    });
    const counter = await fetch(`${process.env.COUNTER_URL}/${id}`);
    const incr = await incrCounter.json();
    const valueOfCounter: IValueOfCounter = await counter.json();
    view = +(valueOfCounter.counter as string);

    //Mongo
    // <<<  IoC homework >>>
    const repo = container.get(BooksRepository);
    const book = await repo.getBook(id);
    res.render("views/book/view", {
      title: "Book | view",
      book: book,
      view: view,
    });
  } catch (e) {
    res.status(500).json({ errcode: 500, errmsg: (e as Error).message });
  }
};

export default viewBook;
