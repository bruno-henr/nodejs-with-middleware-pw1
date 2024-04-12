import { UserRepository } from "../../../implementation/UserRepository.js";
import "../../../types/UserTypes.js";

export class MarkTecnologyUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  /**
   * @param {string} tecnologyId
   */
  execute(userId, tecnologyId) {
    if (!userId) {
      throw new Error("User is required");
    }

    const tecnology = this.userRepository.markTecnology(userId, tecnologyId);
    return tecnology;
  }
}
