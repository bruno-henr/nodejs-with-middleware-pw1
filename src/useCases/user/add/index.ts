import { AddUserController } from "./controller.js";
import { AddUserUseCase } from "./useCase.js";
import { UserRepository } from "../../../implementation/UserRepository.js";

const userRepository = new UserRepository();
const addUserUseCase = new AddUserUseCase(userRepository);
const addUserController = new AddUserController(addUserUseCase);

export { addUserUseCase, addUserController };
