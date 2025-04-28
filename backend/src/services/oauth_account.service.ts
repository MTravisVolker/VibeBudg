import { PrismaClient, OAuth_Account } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class OAuthAccountService {
  async create(data: Omit<OAuth_Account, 'id'>) {
    return prisma.oAuth_Account.create({ data });
  }
  async findAll() {
    return prisma.oAuth_Account.findMany();
  }
  async findById(id: number) {
    return prisma.oAuth_Account.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<OAuth_Account>) {
    return prisma.oAuth_Account.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.oAuth_Account.delete({ where: { id } });
  }
}
