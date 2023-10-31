import { useQuery } from 'react-query';

export default function useGetData(): any {
  return useQuery('data', async () => {
    // Simulate an API call here
    const response = await fetch('/api/data'); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}