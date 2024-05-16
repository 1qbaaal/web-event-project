import { prisma } from "@/connection"

export const getEventById = async ({id}: {id: any}) => {
  const findEventId =  await prisma.event.findUnique({    
    where:{
      id: Number(id)
    },
    include:{
      eventType:true,
      eventCategory:true,
      eventImage:true,
      location: true,
      ticket: true
    }
  })
  if(!findEventId){
    throw new Error ('Event Id Not Found!')
  }else{
    return findEventId
  }
}

export const getAllEvent = async () => {
  return await prisma.event.findMany({
    include: {
      eventType: true,
      eventCategory: true,
      location: true,
      eventImage: true,
      promotion: true,
      ticket: true
    }
  });
}