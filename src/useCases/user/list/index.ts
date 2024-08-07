import { ListUserController } from "./controller.js";
import { ListUserUseCase } from "./useCase.js";
import { UserRepository } from "../../../implementation/UserRepository.js";

const userRepository = new UserRepository();
const listUserUseCase = new ListUserUseCase(userRepository);
const listUserController = new ListUserController(listUserUseCase);

export { listUserUseCase, listUserController };
