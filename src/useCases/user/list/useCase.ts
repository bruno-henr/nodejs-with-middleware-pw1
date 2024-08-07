import { UserRepository } from "../../../implementation/UserRepository.js";

export class ListUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute() {
    const users = this.userRepository.list();
    return users;
  }
}
