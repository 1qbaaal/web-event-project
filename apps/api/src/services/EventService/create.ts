import { prisma } from "@/connection";

export const createEvent = async (data: any, images: any) => {
  return await prisma.$transaction(async (tx: any) => {
    
    const createEventImage = await tx.event.create({
      data: {
        name: data.name,
        price: data.price,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        startTime: new Date(),
        endTime: new Date(),
        locationId: data.locationId,
        description: data.description,
        eventCategoryId: data.eventCategoryId,
        eventTypeId: data.eventTypeId
      },
    });
    
   const imagesToCreate: any = [];
   images.forEach((item: any) => {
    imagesToCreate.push({
      url: item.path,
      eventId: createEventImage.id
    })
   })

   await tx.eventImage.createMany({
    data:[...imagesToCreate]
   })
  });
};
