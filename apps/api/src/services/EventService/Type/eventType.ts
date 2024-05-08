import { prisma } from "@/connection"

export const createEventType = async ({name}: {name: string}) => {

  return await prisma.eventType.create({
    data: {
      name
    }
})
}

export const listEventType = async () => {

  return await prisma.eventType.findMany();
}