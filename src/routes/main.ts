import { Router } from "express";
import mainPage from "../controllers/mainPage";

const mainRouter = Router();

mainRouter.get("/", mainPage);

export default mainRouter;
