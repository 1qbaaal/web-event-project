'use client';
import { toast } from 'react-toastify';
import { useCreateReviewMutation } from '../api/useCreateReviewMutation';
export const useCreateReviewMutate = () => {
  const { mutate: mutationCreateReview } = useCreateReviewMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    mutationCreateReview,
  };
};
