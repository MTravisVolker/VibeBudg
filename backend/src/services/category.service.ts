import { PrismaClient, Category } from '@backend/generated/prisma/client';

const prisma = new PrismaClient();

export class CategoryService {
  async create(data: Omit<Category, 'id'>) {
    return prisma.category.create({ data });
  }
  async findAll() {
    return prisma.category.findMany();
  }
  async findById(id: number) {
    return prisma.category.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Category>) {
    return prisma.category.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.category.delete({ where: { id } });
  }
}
