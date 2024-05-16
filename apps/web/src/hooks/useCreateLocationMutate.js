'use client'
import { useCreateLocationMutation } from '../api/useCreateLocationMutation';
import { toast } from 'react-toastify';

export const useCreateLocationMutate = () => {
  const { mutate: mutationCreateLocation } = useCreateLocationMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
    },

    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutationCreateLocation,
  };
};
