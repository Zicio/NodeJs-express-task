import { Router } from "express";
import mainPage from "../controllers/render/mainPage";

const indexRouter = Router();

indexRouter.get("/", mainPage);

export default indexRouter;
