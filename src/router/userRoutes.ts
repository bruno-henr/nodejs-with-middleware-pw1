import { Router } from "express";
import { addUserController } from "../useCases/user/add/index";
import { listUserController } from "../useCases/user/list/index";

export const userRouter = Router();

userRouter.post("/users", (req, res) => addUserController.handle(req, res));
userRouter.get("/users", (req, res) => listUserController.handle(req, res));
