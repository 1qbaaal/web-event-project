import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCategoryQuery = () => {
  const [categoryQuery, locationQuery, eventTypeQuery] = useQueries({
    queries: [
      {
        queryKey: ['category'],
        queryFn: async () => {
          return await axios.get('http://localhost:8000/api/category');
        },
      },
      {
        queryKey: ['location'],
        queryFn: async () => {
          return await axios.get('http://localhost:8000/api/location/list');
        }
      },
      {
        queryKey: ['eventType'],
        queryFn: async () => {
          return await axios.get('http://localhost:8000/api/type/list');
        }
      }
    ],
  });

  return {
    categoryQuery,
    locationQuery,
    eventTypeQuery
  };
};
