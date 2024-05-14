import { prisma } from "@/connection";

export const getPromotionService = async ({ id }: { id: number }) => {
  const findPromotionId = await prisma.promotion.findUnique({
    where: {
      id: id,
    },
  });
  if (!findPromotionId) {
    throw new Error("Promotion Id Not Found!");
  } else {
    return findPromotionId;
  }
}