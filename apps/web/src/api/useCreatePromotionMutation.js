import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useCreatePromotionMutation = ({onSuccess, onError}) => {
  const { mutate } = useMutation({
    mutationFn: async ({codeVoucher, totalVoucher, discount, startDate, endDate, eventId}) => {
      return await axios.post('http://localhost:8000/api/promotion/', {codeVoucher, totalVoucher, discount, startDate, endDate, eventId})
    },

    onSuccess,
    onError
  })

  return{
    mutate
  }
}