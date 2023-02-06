import { Router } from "express";
import mainPage from "../controllers/main/mainPage";

const mainRouter = Router();

mainRouter.get("/", mainPage);

export default mainRouter;
