import { PrismaClient, Due_Bills } from '../generated/prisma/client';

const prisma = new PrismaClient();

export class DueBillsService {
  async create(data: Omit<Due_Bills, 'id'>) {
    return prisma.due_Bills.create({ data });
  }
  async findAll() {
    return prisma.due_Bills.findMany();
  }
  async findById(id: number) {
    return prisma.due_Bills.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Due_Bills>) {
    return prisma.due_Bills.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.due_Bills.delete({ where: { id } });
  }
}
