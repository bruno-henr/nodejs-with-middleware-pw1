import { UserRepository } from "../../../implementation/UserRepository.js";
import { TechnologyEditDTO } from "./TechnologyEditDTO.js";

export class EditTecnologyUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(technology: TechnologyEditDTO) {
    const tecnologies = await this.userRepository.editTechnology(technology);
    return tecnologies;
  }
}
