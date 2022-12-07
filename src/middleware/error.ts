import { Request, Response } from "express";

const error = (req: Request, res: Response) => {
  res.render("views/errors/404", {
    title: "404",
  });
};

export default error;
