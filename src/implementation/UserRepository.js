import "../types/UserTypes.js";
import { v4 as uuidv4 } from "uuid";

export class UserRepository {
  users = [];
  /**
   * @param {UserAddDTO} user
   */
  add(user) {
    const _user = {
      ...user,
      id: uuidv4(),
      tecnologies: [],
    };
    this.users.push(_user);
    return _user;
  }

  listTecnologies(userId) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      return null;
    }
    return user.tecnologies;
  }

  edit(user) {}
  /**
   * @param {string} username
   */
  list(username) {
    if (username) {
      return this.users.find((user) => user.username === username);
    }
    return this.users;
  }

  /**
   * @param {string} userId
   */
  delete(userId) {
    ya;
  }
}
