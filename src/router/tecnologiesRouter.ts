import { Router } from "express";
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
import { listTecnologiesController } from "../useCases/tecnologies/list/index";
import { addTecnologiesController } from "../useCases/tecnologies/add/index";
import { editTecnologiesController } from "../useCases/tecnologies/edit/index";
import { markTecnologyController } from "../useCases/tecnologies/markTecnology/index";
import { deleteTecnologyController } from "../useCases/tecnologies/delete/index";

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

tecnologiesRouter.patch('/tecnologies/:id/studied', (req, res) => {
    markTecnologyController.handle(req, res);
})
tecnologiesRouter.delete('/tecnologies/:id', (req, res) => {
    deleteTecnologyController.handle(req, res);
})
