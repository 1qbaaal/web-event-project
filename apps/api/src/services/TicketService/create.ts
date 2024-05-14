import { prisma } from "@/connection"
import { ICreateTicket } from "./types"

export const createTicket = async({
  totalTicket,
  typeTicket,
  price,
  eventId
}: ICreateTicket) =>{
  await prisma.ticket.create({
    data:{
      totalTicket,
      typeTicket,
      price,
      eventId
    }
  })
}