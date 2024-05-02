import { prisma } from '@/connection';
import { ICreateEvent } from './types';

export const createEvent = async ({
  name,
  price,
  schedule,
  location,
  description,
  category,
  typeEvent,
  userId,
}: ICreateEvent) => {
  await prisma.event.create({
    data: {
      name,
      price,
      location,
      schedule: new Date(schedule),
      description,
      category,
      typeEvent,
      userId,
    },
  });
};


