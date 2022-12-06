import { Request, Response } from "express";
import path from "path";

const mainPage = async (req: Request, res: Response) => {
  res.render("views/index", {
    title: "Главная",
  });
};

export default mainPage;
