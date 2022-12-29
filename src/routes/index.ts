import { Router } from "express";
import bookRouter from "./book";
import mainRouter from "./main";

const router = Router();

router.use("/book", bookRouter);
router.use(mainRouter);

export default router;
