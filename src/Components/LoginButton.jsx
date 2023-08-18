import React from 'react';
import '../Styles/LoginButton.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../Redux/Action';


function LoginButton() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
     <button
        className="loginButton"
        onClick={(e) => {
           e.preventDefault();
           dispatch(loginAction(navigate));
        }}
     >
        Sign In
     </button>
  );
}
export default LoginButton