import { Router } from 'express'
import { tecnologiesRouter } from './tecnologiesRouter.js'
import { userRouter } from './userRoutes.js'

export const router = Router();

router.use(userRouter);
router.use(tecnologiesRouter);


