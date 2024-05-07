import { prisma } from "@/connection"

export const deleteEvent = async ({id}: {id: number}) =>{
  const findEvent = await prisma.event.findUnique({
    where:{
      id: id
    }
  })
  if(!findEvent){
    throw new Error('Event Id Not Found!')
  }else{
    await prisma.event.delete({
      where:{
        id: id
      }
    })
    return findEvent
  }
}