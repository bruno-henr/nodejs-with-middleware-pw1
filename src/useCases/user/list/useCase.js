import { UserRepository } from "../../../implementation/UserRepository.js";
import "../../../types/UserTypes.js";

export class ListUserUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute() {
    const users = this.userRepository.list();
    return users;
  }
}
