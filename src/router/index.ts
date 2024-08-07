import { Router } from 'express'
import { tecnologiesRouter } from './tecnologiesRouter'
import { userRouter } from './userRoutes'

export const router = Router();

router.use(userRouter);
router.use(tecnologiesRouter);


