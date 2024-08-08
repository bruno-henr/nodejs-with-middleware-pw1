import { ListTecnologiesController } from "./controller";
import { ListTecnologiesUseCase } from "./useCase";
import { UserRepository } from "../../../implementation/UserRepository";

const userRepository = new UserRepository();
const listTecnologiesUseCase = new ListTecnologiesUseCase(userRepository);
const listTecnologiesController = new ListTecnologiesController(listTecnologiesUseCase);

export { listTecnologiesUseCase, listTecnologiesController };
