import { prisma } from "@/connection"

export const deletePromotionService = async ({ id }: { id: number }) => {
  return await prisma.$transaction(async (tx: any) => {
    const findEventId = await tx.event.findUnique({
      where: {
        id: id
      }
    })
    if(!findEventId) throw new Error('Event Id Not Found!')
      
    const findPromotionId = await tx.promotion.findUnique({
      where: {
        id: id
      }
    })
    if(!findPromotionId){
      throw new Error('Promotion Id Not Found!')
    } else {
      await tx.promotion.delete({
        where: {
          id: id
        }
      })
    }
  })
}