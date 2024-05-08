'use client';
import { toast } from 'react-toastify';
import { useCreateEventMutation } from '../api/useCreateEventMutation';

export const useCrateEventMutate = () => {
  const { mutate: mutationCreateEvent } = useCreateEventMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (err) => {
      // toast.error(err.response.data.message);
      console.log(err);
    },
  });

  return {
    mutationCreateEvent,
  };
};
