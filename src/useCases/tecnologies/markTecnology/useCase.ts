import { UserRepository } from "../../../implementation/UserRepository";

export class MarkTecnologyUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(tecnologyId: string) {
    const tecnology = await this.userRepository.markTecnology(tecnologyId);
    return tecnology;
  }
}
