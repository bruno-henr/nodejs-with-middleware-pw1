import { UserRepository } from "../../../implementation/UserRepository.js";

export class MarkTecnologyUseCase {

  constructor(private readonly userRepository: UserRepository) { }

  execute(userId: string, tecnologyId: string) {
    if (!userId) {
      throw new Error("User is required");
    }

    const tecnology = this.userRepository.markTecnology(userId, tecnologyId);
    return tecnology;
  }
}
