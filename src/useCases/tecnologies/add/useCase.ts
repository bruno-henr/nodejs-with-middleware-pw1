import { UserRepository } from "../../../implementation/UserRepository";
import { AddTecnologyDTO } from "./AddTecnologyDTO";

export class AddTecnologiesUseCase {

  constructor(private readonly userRepository: UserRepository) { }

  async execute(userId: string, tecnology: AddTecnologyDTO) {
    if (!userId) {
      throw new Error("User is required")
    }
    if (!tecnology.title) {
      throw new Error("Title is required")
    }
    if (!tecnology.deadline) {
      throw new Error("Deadline is required")
    }

    const tecnologyCreated = await this.userRepository.addTecnology(userId, tecnology);
    return tecnologyCreated;
  }
}
