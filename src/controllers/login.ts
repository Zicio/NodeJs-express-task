import { IUser } from "./../models/models";
import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  //В задании не сказано, что делать с данными пользователя. Поэтому не стал их никуда сохранять
  const { name, password } = (await req.body) as IUser;
  res.status(201).json({ id: 1, mail: "test@mail.ru" });
};

export default login;
