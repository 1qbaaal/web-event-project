'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetEventById = (paramsEvent) => {
  const { data } = useQuery({
    queryKey: ['events', paramsEvent],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/api/event/${paramsEvent}`)
    }
  })

  return{
    data
  }
}