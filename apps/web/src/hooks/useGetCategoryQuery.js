import { useGetCategoryQuery } from "../api/useGetCategoryQuery"

export const useCategoryQuery = () => {
  const { categoryQuery, locationQuery,eventTypeQuery  } = useGetCategoryQuery()

  return {
     dataCategory: categoryQuery?.data?.data?.data,
     dataLocation: locationQuery?.data?.data?.data,
     dataEventType: eventTypeQuery?.data?.data?.data
  }
}