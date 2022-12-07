import { Router } from "express";
import mainPage from "../controllers/mainPage";

const indexRouter = Router();

indexRouter.get("/", mainPage);

export default indexRouter;
