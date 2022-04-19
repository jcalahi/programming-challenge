import { useState } from 'react';
import _debounce from 'lodash/debounce';
import { API_URL } from '../constants';

interface PersonData {
  avatar_url: string;
  location: string;
  name: string;
}

const useFetchPerson = () => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState<PersonData | undefined>(undefined);

  const debouncedFetch = _debounce(async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/${id}`);
      const userData = await response.json();
      setData(userData);
    } catch (err: unknown) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, 0);

  return {
    data,
    debouncedFetch,
    loading
  };
};

export default useFetchPerson;
