import { UserRepository } from "../implementation/UserRepository.js";
import { AddUserUseCase } from "../useCases/user/add/useCase.js";
import { expect } from "@jest/globals";
import "../types/UserTypes.js";

describe("Add User", () => {
  let userRepository;
  /**
   * @type {AddUserUseCase}
   */
  let userAddUseCase;
  beforeAll(() => {
    userRepository = new UserRepository();
    userAddUseCase = new AddUserUseCase(userRepository);
  });
  afterAll(() => {
    userRepository = null;
    userAddUseCase = null;
  });
  test("should be able add user", () => {
    /**
     * @type {UserAddDTO}
     */
    let user = {
      name: "bruno henrique",
      username: "brunohenrique",
    };
    const userResponse = userAddUseCase.execute(user);

    expect(userResponse.id).toBeTruthy();
  });

  test("it shouldn't be possible add user without name", () => {
    /**
     * @type {UserAddDTO}
     */
    let user = {
      name: "",
      username: "brunohenrique",
    };

    expect(() => userAddUseCase.execute(user)).toThrow(Error);
  });

  test("it shouldn't be possible add user without name", () => {
    /**
     * @type {UserAddDTO}
     */
    let user = {
      name: "bruno henrique",
      username: "",
    };

    expect(() => userAddUseCase.execute(user)).toThrow(Error);
  });

  // test("it shouldn't be possible add user with name already", async () => {
  //   /**
  //    * @type {UserAddDTO}
  //    */
  //   let user = {
  //     name: "bruno henrique",
  //     username: "brunohenrique",
  //   };
  //   userAddUseCase.execute(user);
  //   console.log("user ==", u.username);
  //   let userAlreadyExists = userAddUseCase.execute(user);
  //   // console.log(userAlreadyExists);
  //   await expect(async () => {
  //     await userAddUseCase.execute(user);
  //   }).rejects.toThrowError("Username already exists");
  // });
});
