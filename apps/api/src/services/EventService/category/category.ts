import { prisma } from '@/connection';

export const listCategory = async () => {
  return await prisma.eventCategory.findMany();
};
