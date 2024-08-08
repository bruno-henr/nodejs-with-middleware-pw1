import { AddTecnologiesController } from "./controller";
import { AddTecnologiesUseCase } from "./useCase";
import { UserRepository } from "../../../implementation/UserRepository";

const userRepository = new UserRepository();
const addTecnologiesUseCase = new AddTecnologiesUseCase(userRepository);
const addTecnologiesController = new AddTecnologiesController(addTecnologiesUseCase);

export { addTecnologiesUseCase, addTecnologiesController };
