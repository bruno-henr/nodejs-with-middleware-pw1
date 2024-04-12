import { UserRepository } from "../../../implementation/UserRepository.js";
import "../../../types/UserTypes.js";

export class AddTecnologiesUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  /**
   * @param {string} userId
   * @param {TechnologyAddDTO} tecnology
   */
  execute(userId, tecnology) {
    if(!userId) {
        throw new Error("User is required")
    }
    if(!tecnology.title) {
        throw new Error("Title is required")
    }
    if(!tecnology.deadline) {
        throw new Error("Deadline is required")
    }
    
    const tecnologyCreated = this.userRepository.addTecnology(userId, tecnology);
    return tecnologyCreated;
  }
}
