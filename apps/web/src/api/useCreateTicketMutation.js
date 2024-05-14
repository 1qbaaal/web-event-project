'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateTicketMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ totalTicket, typeTicket, price, eventId }) => {
      return await axios.post('http://localhost:8000/api/ticket/', {
        totalTicket,
        typeTicket,
        price,
        eventId,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
