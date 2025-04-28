import { PrismaClient, Api_Token } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class ApiTokenService {
  async create(data: Omit<Api_Token, 'id'>) {
    return prisma.api_Token.create({ data });
  }
  async findAll() {
    return prisma.api_Token.findMany();
  }
  async findById(id: number) {
    return prisma.api_Token.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Api_Token>) {
    return prisma.api_Token.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.api_Token.delete({ where: { id } });
  }
}
