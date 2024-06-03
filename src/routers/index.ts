import { Router } from "express";
import usersRouter from "./users.router";
import Paths from "@src/routers/paths";

const router = Router();

router.use(Paths.Users.Base, usersRouter);

export default router;
