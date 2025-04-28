import { PrismaClient, Bills } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class BillsService {
  async create(data: Omit<Bills, 'id'>) {
    return prisma.bills.create({ data });
  }
  async findAll() {
    return prisma.bills.findMany();
  }
  async findById(id: number) {
    return prisma.bills.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Bills>) {
    return prisma.bills.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.bills.delete({ where: { id } });
  }
}
