'use client';
import { toast } from 'react-toastify';
import { useCreateTicketMutation } from '../api/useCreateTicketMutation';

export const useCreateTicketMutate = () => {
  const { mutate: mutationCreateTicket } = useCreateTicketMutation({
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutationCreateTicket,
  };
};
