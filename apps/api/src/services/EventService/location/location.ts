import { prisma } from '@/connection';
import { ICreateEventLocation } from './types';

export const createLocation = async ({
  city,
  province,
  zip,
}: ICreateEventLocation) => {
  return await prisma.location.create({
    data: {
      city,
      province,
      zip,
    },
  });
};

export const listLocation = async () => {
  return await prisma.location.findMany();
}
