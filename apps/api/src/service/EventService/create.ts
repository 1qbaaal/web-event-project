import { prisma } from '@/connection';
import { ICreateEvent } from './types';

export const createEvent = async (data: any, images: any) => {
  return await prisma.$transaction(async (tx) => {
    const createEventImage = await tx.event.create({
      data: {
        name: data.name,
        price: data.price,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        startTime: new Date(),
        endTime: new Date(),
        location: data.location,
        description: data.description,
        eventCategoryId: data.eventCategoryId,
        typeEvent: data.typeEvent,
      },
    });

    const imagesToCreate: any = [];
    images.forEach((item: any) => {
      imagesToCreate.push({
        url: item.path,
        eventId: createEventImage.id,
      });
    });

    await tx.eventImage.createMany({
      data: [...imagesToCreate],
    });
  });
};
