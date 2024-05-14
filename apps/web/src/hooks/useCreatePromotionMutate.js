import { toast } from 'react-toastify';
import { useCreatePromotionMutation } from '../api/useCreatePromotionMutation';

export const useCreatePromotionMutate = () => {
  const { mutate: mutationCreatePromotion } = useCreatePromotionMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutationCreatePromotion,
  };
};
