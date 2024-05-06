import { prisma } from "@/connection"

export const getEvent = async ({id}: {id: number}) => {
  const findEventId =  await prisma.event.findUnique({    
    where:{
      id: id
    }
  })
  if(!findEventId){
    throw new Error ('Event Id Not Found!')
  }else{
    return findEventId
  }
}