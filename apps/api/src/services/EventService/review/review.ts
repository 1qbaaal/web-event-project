import { ICreateReview } from "./types";
import { prisma } from "@/connection";

export const createReveiew = async ({
  rating, comment, eventId, userUid
}: ICreateReview) => {
    if(rating < 1 || rating > 5) throw new Error('Rating Must Be Less Than 5 or Greater Than 1')
      
    const findEventId = await prisma.event.findUnique({
      where: {
        id: eventId
      }
    })
    if(!findEventId) throw new Error('Event Id Not Found!')

    const findUserUid =  await prisma.user.findUnique({
      where: {
        uid: userUid
      }
    })

    if(!findUserUid){
      throw new Error('User Id Not Found!')
    } else {
      return await prisma.review.create({
        data: {
          rating,
          comment,
          eventId,
          userUid
        }
      })
      
    }
}