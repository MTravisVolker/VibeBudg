import { PrismaClient, Bank_Account } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class BankAccountService {
  async create(data: Omit<Bank_Account, 'id'>) {
    return prisma.bank_Account.create({ data });
  }
  async findAll() {
    return prisma.bank_Account.findMany();
  }
  async findById(id: number) {
    return prisma.bank_Account.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Bank_Account>) {
    return prisma.bank_Account.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.bank_Account.delete({ where: { id } });
  }
}
