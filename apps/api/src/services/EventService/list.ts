import { prisma } from "@/connection"

export const listEvent = async ({page, per_page}: any) =>{
  const listEventByQuery = await prisma.event.findMany({
    take: Number(per_page) || 5,
    skip: (Number(page) -1 ) * Number(per_page) || 0,
  })
  
  return listEventByQuery
}