import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useCreateLocationMutation = ({onSuccess, onError}) => {
  const { mutate } = useMutation({
    mutationFn: async ({city, province, zip}) => {
      return await axios.post('http://localhost:8000/api/location/', {city, province, zip})
    },

    onSuccess,
    onError
  })

  return{
    mutate
  }
}