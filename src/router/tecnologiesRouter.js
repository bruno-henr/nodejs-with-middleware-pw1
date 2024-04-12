import { Router } from "express";
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount.js";
import { listTecnologiesController } from "../useCases/tecnologies/list/index.js";
import { addTecnologiesController } from "../useCases/tecnologies/add/index.js";
import { editTecnologiesController } from "../useCases/tecnologies/edit/index.js";

export const tecnologiesRouter = Router();
tecnologiesRouter.use(checkExistsUserAccount);

tecnologiesRouter.get("/tecnologies", (req, res) => {
  listTecnologiesController.handle(req, res);
});

tecnologiesRouter.post("/tecnologies", (req, res) => {
  addTecnologiesController.handle(req, res);
});

tecnologiesRouter.put('/tecnologies/:id', (req, res) => {
    editTecnologiesController.handle(req, res);
})
