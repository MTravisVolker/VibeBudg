import { PrismaClient, Bank_Account_Instance } from '../generated/prisma/client';

const prisma = new PrismaClient();

export class BankAccountInstanceService {
  async create(data: Omit<Bank_Account_Instance, 'id'>) {
    return prisma.bank_Account_Instance.create({ data });
  }
  async findAll() {
    return prisma.bank_Account_Instance.findMany();
  }
  async findById(id: number) {
    return prisma.bank_Account_Instance.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Bank_Account_Instance>) {
    return prisma.bank_Account_Instance.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.bank_Account_Instance.delete({ where: { id } });
  }
}
