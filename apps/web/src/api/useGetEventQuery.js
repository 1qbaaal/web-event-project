import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetEventQuery = () => {
  const { data } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return await axios.get('http://localhost:8000/api/event/')
    }
  })

  return{
    data
  }
}