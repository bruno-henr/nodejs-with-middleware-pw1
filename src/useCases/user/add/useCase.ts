import { UserRepository } from "../../../implementation/UserRepository.js";
import { UserAddDTO } from "./UserAddDTO.js";

export class AddUserUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  execute(user: UserAddDTO) {
    if (!user.name) {
      throw new Error("Name is required");
    }
    if (!user.username) {
      throw new Error("Username is required");
    }
    const userAlready = this.userRepository.list(user.username);

    if (typeof userAlready === "object") {
      throw new Error("Username already exists");
    }
    
    return this.userRepository.add(user);
  }
}
