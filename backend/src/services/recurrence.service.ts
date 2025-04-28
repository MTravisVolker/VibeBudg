import { PrismaClient, Recurrence } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class RecurrenceService {
  async create(data: Omit<Recurrence, 'id'>) {
    return prisma.recurrence.create({ data });
  }
  async findAll() {
    return prisma.recurrence.findMany();
  }
  async findById(id: number) {
    return prisma.recurrence.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Recurrence>) {
    return prisma.recurrence.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.recurrence.delete({ where: { id } });
  }
}
