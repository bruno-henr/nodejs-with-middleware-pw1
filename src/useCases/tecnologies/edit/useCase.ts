import { UserRepository } from "../../../implementation/UserRepository.js";
import "../../../types/UserTypes.js";

export class EditTecnologyUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  /**
   * @param {string} userId
   * @param {TechnologyEditDTO} user
   */
  execute(userId, technology) {
    if (!userId) {
      throw new Error("User is required");
    }

    const tecnologies = this.userRepository.editTechnology(userId, technology);
    return tecnologies;
  }
}
