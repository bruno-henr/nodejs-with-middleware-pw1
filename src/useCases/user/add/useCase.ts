import { UserRepository } from "../../../implementation/UserRepository";
import { UserAddDTO } from "./UserAddDTO";

export class AddUserUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(user: UserAddDTO) {
    if (!user.name) {
      throw new Error("Name is required");
    }
    if (!user.username) {
      throw new Error("Username is required");
    }
    const userAlready = await this.userRepository.list(user.username);
    if (!!userAlready) {
      throw new Error("Username already exists");
    }
    
    return await this.userRepository.add(user);
  }
}
