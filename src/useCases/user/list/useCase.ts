import { UserRepository } from "../../../implementation/UserRepository";

export class ListUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.list();
    return users;
  }
}
