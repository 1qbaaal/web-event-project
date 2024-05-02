import { prisma } from '@/connection';
import { ICreateEvent } from './types';

export const updateEvent = async (
  { id }: { id: number },
  {
    name,
    price,
    schedule,
    location,
    description,
    category,
    typeEvent,
    userId,
  }: ICreateEvent,
) => {
  const findEvent = await prisma.event.findUnique({
    where: {
      id: id,
    },
  });
  if (!findEvent) {
    throw new Error('Event Id Not Found!');
  } else if (findEvent) {
    await prisma.event.update({
      where: {
        id: id,
      },
      data: {
        name,
        price,
        schedule: new  Date(schedule),
        location,
        description,
        category,
        typeEvent,
        userId,
      },
    });
    return findEvent
  }
};
