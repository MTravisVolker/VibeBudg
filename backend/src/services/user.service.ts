import { PrismaClient, User } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class UserService {
  async create(data: Omit<User, 'id' | 'created_at' | 'updated_at'>) {
    return prisma.user.create({ data });
  }
  async findAll() {
    return prisma.user.findMany();
  }
  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }
  async update(id: string, data: Partial<User>) {
    return prisma.user.update({ where: { id }, data });
  }
  async delete(id: string) {
    return prisma.user.delete({ where: { id } });
  }
}