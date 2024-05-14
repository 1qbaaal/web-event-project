import { useGetEventQuery } from "../api/useGetEventQuery"

export const useGetEventMutate = () => {
  const { data } = useGetEventQuery();

  return{
    data
  }
}