import { prisma } from "@/connection"

export const updateEvent = async (data: any, images: any, id:any) =>{
  return await prisma.$transaction(async(tx) => {
    const findEventById = await tx.event.findUnique({
      where:{
        id: parseInt(id)
      }
    })

    if(!findEventById) throw new Error('Event Id Not Found!')

    await tx.event.update({
      where:{
        id: parseInt(id)
      },
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
        eventId: findEventById.id,
      });
    });

    const findEventImage = await tx.eventImage.findMany({
      where:{
        eventId: findEventById.id
      }
    })

    await tx.eventImage.deleteMany({
      where:{
        eventId: findEventById.id
      }
    })

    await tx.eventImage.createMany({
      data:[...imagesToCreate]
    })

    return findEventImage
  })
}
