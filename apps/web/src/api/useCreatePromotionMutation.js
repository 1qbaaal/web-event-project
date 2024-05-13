import { useMutation } from '@tanstack/react-query'

export const useCreatePromotionMutation = ({onSuccess, onError}) => {
  const { mutate } = useMutation({
    mutationFn: async (fd) => {
      return await axios.post('http://localhost:8000/api/promotion/', fd)
    },

    onSuccess,
    onError
  })

  return{
    mutate
  }
}