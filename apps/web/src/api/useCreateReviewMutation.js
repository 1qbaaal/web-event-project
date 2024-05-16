'use client'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateReviewMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ rating, comment, eventId, userUid }) => {
      return await axios.post('http://localhost:8000/api/review/', {
        rating,
        comment,
        eventId,
        userUid,
      });
    },

    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
