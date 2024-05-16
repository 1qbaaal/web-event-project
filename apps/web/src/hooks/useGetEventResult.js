'use client'
import { useGetEventById } from "../api/useGetEvent"

export const useGetEventResult = (id) => {

  const { data } = useGetEventById(id);
  return{
    data
  }
}