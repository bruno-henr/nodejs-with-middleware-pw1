import { UserRepository } from "../../../implementation/UserRepository";

export class DeleteTecnologyUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(userId: string, technologyId: string) {
    if (!userId) {
      throw new Error("User is required");
    }
    if (!technologyId) {
      throw new Error("TechnologyID is required");
    }

    const tecnology = await this.userRepository.deleteTechnologyById(
      userId,
      technologyId
    );

    return tecnology;
  }
}
