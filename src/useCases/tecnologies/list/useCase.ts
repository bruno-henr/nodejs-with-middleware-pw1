import { UserRepository } from "../../../implementation/UserRepository.js";
import "../../../types/UserTypes.js";

export class ListTecnologiesUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  /**
   * @param {UserAddDTO} user
   * @returns {UserAddDTOReturn | Error}
   */
  execute(userId) {
    if(!userId) {
        throw new Error("User is required")
    }
    
    const tecnologies = this.userRepository.listTecnologies(userId);
    return tecnologies;
  }
}
