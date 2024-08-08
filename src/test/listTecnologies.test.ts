import { UserRepository } from "../implementation/UserRepository.js";
import { ListTecnologiesUseCase } from "../useCases/tecnologies/list/useCase.js";
import { expect } from "@jest/globals";
import "../@types/UserTypes.js";
import { AddUserUseCase } from "../useCases/user/add/useCase.js";

describe("List Tecnologies from an user", () => {
  let userRepository;
  /**
   * @type {ListTecnologiesUseCase}
   */
  let listTecnologiesUseCase;
  /**
   * @type {AddUserUseCase}
   */
  let userAddUseCase;
  let user = {};
  beforeAll(() => {
    userRepository = new UserRepository();
    userAddUseCase = new AddUserUseCase(userRepository);
    listTecnologiesUseCase = new ListTecnologiesUseCase(userRepository);

    /**
     * @type {UserAddDTO}
     */
    let newUser = {
      name: "bruno henrique",
      username: "brunohenrique",
    };
    user = userAddUseCase.execute(newUser);
  });
  afterAll(() => {
    userRepository = null;
    listTecnologiesUseCase = null;
  });

  test("should be able list tecnologies from an user", () => {
    const technologies = listTecnologiesUseCase.execute(user.id);

    expect(technologies).toBeTruthy();
  });
  
});
