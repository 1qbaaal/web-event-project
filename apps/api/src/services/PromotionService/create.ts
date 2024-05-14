import { prisma } from "@/connection";
import { ICreatePromotion } from "./types";

export const createPromotion = async ({
  codeVoucher,
  totalVoucher,
  discount,
  startDate,
  endDate,
  eventId
}:ICreatePromotion ) => {
  await prisma.promotion.create({
    data:{
      codeVoucher,
      totalVoucher,
      discount,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      eventId
    }
  })
}