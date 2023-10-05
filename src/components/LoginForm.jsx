import React from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from 'redux/userSlice/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log(form.elements.login.value);
    dispatch(LogIn(form.elements.login.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
