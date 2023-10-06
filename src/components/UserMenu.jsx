import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'redux/userSlice/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  return (
    <div>
      {login}
      <button type="button" onClick={() => dispatch(LogOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
