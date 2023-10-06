import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useLogOutRedirect = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('./login', { replace: true });
    }
  }, [isLoggedIn, navigate]);
};
