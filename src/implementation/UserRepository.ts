import { AddTecnologyDTO } from "src/useCases/tecnologies/add/AddTecnologyDTO";
import { prisma } from "../database/prisma";
import { UserAddDTO } from "../useCases/user/add/UserAddDTO";
import { TechnologyEditDTO } from "src/useCases/tecnologies/edit/TechnologyEditDTO";

export class UserRepository {

  async add(user: UserAddDTO) {
    try {
      const response = await prisma.user.create({
        data: {
          name: user.name,
          username: user.username
        }
      });

      return response;
    } catch (error) {
      return error;
    }

  }

  async listTecnologies(userId: string) {
    const response = await prisma.user.findUnique({
      where: {
        id: userId
      },
      include: {
        tecnologies: true
      }
    });

    return response?.tecnologies
  }

  async addTecnology(userId: string, tecnology: AddTecnologyDTO) {
    await prisma.tecnology.create({
      data: {
        deadline: new Date(tecnology.deadline),
        title: tecnology.title,
        userId,
      }
    });

    return this.listTecnologies(userId);
  }

  async deleteTechnologyById(userId: string, tecnologyId: string) {
    await prisma.tecnology.delete({
      where: {
        id: tecnologyId
      }
    });
    
    return this.listTecnologies(userId);
  }

  async markTecnology(tecnologyId: string) {
    const response = await prisma.tecnology.update({
      where: {
        id: tecnologyId
      },
      data: {
        studied: true
      }
    })
    return response;
  }

  async editTechnology(technology: TechnologyEditDTO) {
    const data: { deadline?: Date, title?: string } = {};
    if(!!technology?.deadline) {
      data.deadline = new Date(technology.deadline)
    }
    if(!!technology?.title) {
      data.title = technology.title;
    }

    const response = await prisma.tecnology.update({
      where: {
        id: technology.id
      },
      data: data
    })
    return response;
  }


  async list(username?: string) {
    if (username) {
      const user = await prisma.user.findFirst({
        where: { username }
      })
      return user
    }
    return await prisma.user.findMany();
  }

  async delete(userId: string) { 
    const response = await prisma.user.delete({
      where: {
        id: userId
      }
    });

    return response;
  }
}
