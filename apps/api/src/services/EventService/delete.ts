import { prisma } from '@/connection';

export const deleteEvent = async ({ id }: { id: number }) => {
  return await prisma.$transaction(async (tx: any) => {
    const findEvent = await tx.eventImage.findUnique({
      where: {
        id: id,
      },
    });

    const findEventId = await tx.event.findUnique({
      where:{
        id: id
      }
    })

    if (!findEvent) throw new Error('Event Id Not Found!');

    await tx.eventImage.delete({
      where: {
        id: findEvent.id,
      },
    });

    await tx.event.delete({
      where: {
        id: findEvent.id,
      },
    });
  });
};
