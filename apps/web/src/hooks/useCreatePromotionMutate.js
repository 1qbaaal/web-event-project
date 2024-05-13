import { useCreatePromotionMutation } from '../api/useCreatePromotionMutation';

export const useCreatePromotionMutate = () => {
  const { mutate: mutationCreatePromotion } = useCreatePromotionMutation({
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutationCreatePromotion,
  };
};
