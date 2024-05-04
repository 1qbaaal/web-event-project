import { prisma } from '@/connection';
import { ICreateEvent } from './types';

export const createEvent = async (data: any, images: any ) =>{
  return await prisma.$transaction(async(tx) =>{
    const createEventImage = await tx.event.create({
      data:{
        name: data.name,
        price: data.price,
        schedule: new Date(data.schedule),
        location: data.schedule,
        description: data.description,
        category: data.category,
        typeEvent: data.typeEvent,
        userId: data.userId
      }
    })

    const imagesToCreate: any = [];
    images.forEach((item: any) => {
      imagesToCreate.push({
        url: item.path,
        eventId: createEventImage.id,
      });
    });

    await tx.eventImage.createMany({
      data: [...imagesToCreate]
    })
    
  })
}


