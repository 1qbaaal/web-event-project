import { prisma } from "@/connection";
import { ICreatePromotion } from "./types";

export const createPromotion = async ({
  description,
  discount,
  startDate,
  endDate,
  eventId
}:ICreatePromotion ) => {
  await prisma.promotion.create({
    data:{
      description,
      discount,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      eventId
    }
  })
}