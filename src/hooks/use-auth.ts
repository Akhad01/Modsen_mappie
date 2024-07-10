import { useEffect, useState } from 'react';
import { useAppSelector } from './redux';

export function useAuth() {
  const [accessKey, setAccessKey] = useState('accessToken');
  const { email, token, id } = useAppSelector((state) => state.user);

  useEffect(() => {
    const tokenItem = localStorage.getItem('accessToken');
    if (tokenItem) {
      setAccessKey(tokenItem);
    }
  }, []);

  return {
    isAuth: !!accessKey,
    email,
    token,
    id,
  };
}
