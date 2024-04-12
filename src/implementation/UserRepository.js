import "../types/UserTypes.js";
import { v4 as uuidv4, v4 } from "uuid";

export class UserRepository {
  /**
   * @type {User[]}
   */
  users = [];
  static #instance = null;

  constructor() {
    if (UserRepository.#instance) {
      UserRepository.#instance;
    } else {
      UserRepository.#instance = this;
    }
    return UserRepository.#instance;
  }

  static getInstance() {
    return UserRepository.#instance;
  }

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

  addTecnology(userId, tecnology) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      return null;
    }
    user.tecnologies.push({
      ...tecnology,
      id: v4(),
      studied: false,
      deadline: new Date(tecnology.deadline),
      created_at: new Date(),
    });
    return user.tecnologies;
  }

  deleteTechnologyById(userId, tecnologyId) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      return null;
    }
    const technologyExist = user.tecnologies.find((t) => t.id === tecnologyId);
    if (!technologyExist) {
      return null;
    }
    user.tecnologies = user.tecnologies.filter((t) => t.id !== tecnologyId);
    return user.tecnologies;
  }

  markTecnology(userId, tecnologyId) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      return null;
    }
    const technologyExist = user.tecnologies.find((t) => t.id === tecnologyId);

    if (!technologyExist) {
      return null;
    }
    Object.assign(technologyExist, {
      studied: true,
    });
    return technologyExist;
  }

  editTechnology(userId, technology) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      return null;
    }
    const technologyExist = user.tecnologies.find(
      (t) => t.id === technology.id
    );

    if (!technologyExist) {
      return null;
    }
    Object.assign(technologyExist, {
      title: technology.title ?? technologyExist.title,
      deadline: new Date(technology.deadline) ?? technologyExist.deadline,
    });
    return technologyExist;
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
  delete(userId) {}
}
