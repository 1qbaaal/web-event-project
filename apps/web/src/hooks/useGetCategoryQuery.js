import { useGetCategoryLocationAndTypeQuery } from "../api/useGetCategoryLocationAndTypeQuery";

export const useCategoryLocationAndTypeQuery = () => {
  const { categoryQuery, locationQuery,eventTypeQuery  } = useGetCategoryLocationAndTypeQuery()

  return {
     dataCategory: categoryQuery?.data?.data?.data,
     dataLocation: locationQuery?.data?.data?.data,
     dataEventType: eventTypeQuery?.data?.data?.data
  }
}