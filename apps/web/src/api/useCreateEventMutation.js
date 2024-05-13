'use client'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateEventMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async (fd) => {
      return await axios.post('http://localhost:8000/api/event/create', fd);
    },

    onSuccess,
    onError,
  });

  return {
    mutate
  };
};
