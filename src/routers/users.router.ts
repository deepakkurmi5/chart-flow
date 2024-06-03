import { Router } from "express";
import { UsersController } from "@src/controller/users.controller";
import Paths from "@src/routers/paths";

const userRouter = Router();

const users = new UsersController();

userRouter.get(Paths.Users.Base, users.getUsers);
userRouter.get(Paths.Users.Get, users.getUserById);
userRouter.post(Paths.Users.Post, users.createUser);

export default userRouter;
