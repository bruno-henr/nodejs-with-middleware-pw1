import { Router } from "express";
import { addUserController } from "../useCases/user/add/index.js";

export const userRouter = Router();

userRouter.post("/users", (req, res) => addUserController.handle(req, res));
