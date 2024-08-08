import { AddUserController } from "./controller";
import { AddUserUseCase } from "./useCase";
import { UserRepository } from "../../../implementation/UserRepository";

const userRepository = new UserRepository();
const addUserUseCase = new AddUserUseCase(userRepository);
const addUserController = new AddUserController(addUserUseCase);

export { addUserUseCase, addUserController };
