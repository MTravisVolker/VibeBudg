import { PrismaClient, Bill_Status } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class BillStatusService {
  async create(data: Omit<Bill_Status, 'id'>) {
    return prisma.bill_Status.create({ data });
  }
  async findAll() {
    return prisma.bill_Status.findMany();
  }
  async findById(id: number) {
    return prisma.bill_Status.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Bill_Status>) {
    return prisma.bill_Status.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.bill_Status.delete({ where: { id } });
  }
}
