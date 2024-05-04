'use client'
import { useCreateEventMutation } from '../api/useCreateEventMutation';

export const useCrateEventMutate = () => {
  const { mutate: mutationCreateEvent } = useCreateEventMutation({
    onSuccess: (res) => {
      console.log(res.data.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutationCreateEvent,
  };
};
