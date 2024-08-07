import { UserRepository } from "../../../implementation/UserRepository.js";
import "../../../types/UserTypes.js";

export class DeleteTecnologyUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  /**
   * @param {string} userId
   * @param {string} technologyId
   */
  execute(userId, technologyId) {
    if (!userId) {
      throw new Error("User is required");
    }
    if (!technologyId) {
      throw new Error("TechnologyID is required");
    }

    const tecnology = this.userRepository.deleteTechnologyById(
      userId,
      technologyId
    );
    
    return tecnology;
  }
}
