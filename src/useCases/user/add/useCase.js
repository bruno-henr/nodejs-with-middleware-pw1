import { UserRepository } from "../../../implementation/UserRepository.js";
import "../../../types/UserTypes.js";

export class AddUserUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  /**
   * @param {UserAddDTO} user
   * @returns {UserAddDTOReturn | Error}
   */
  execute(user) {
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
    const newUser = this.userRepository.add(user);
    return newUser;
  }
}
