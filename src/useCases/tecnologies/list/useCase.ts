import { UserRepository } from "../../../implementation/UserRepository";

export class ListTecnologiesUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string) {
    if (!userId) {
      throw new Error("User is required")
    }

    const tecnologies = await this.userRepository.listTecnologies(userId);
    return tecnologies;
  }
}
