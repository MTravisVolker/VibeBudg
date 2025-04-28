import { PrismaClient, Audit_Log } from '../generated/prisma/client';

const prisma = new PrismaClient();

export class AuditLogService {
  async create(data: Omit<Audit_Log, 'id'>) {
    return prisma.audit_Log.create({ data });
  }
  async findAll() {
    return prisma.audit_Log.findMany();
  }
  async findById(id: number) {
    return prisma.audit_Log.findUnique({ where: { id } });
  }
  async update(id: number, data: Partial<Audit_Log>) {
    return prisma.audit_Log.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.audit_Log.delete({ where: { id } });
  }
}
