import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/Action';
import '../Styles/LogoutLink.css';

function LogoutLink(props) {
   const dispatch = useDispatch();

   return (
      <Link
         className="logoutLink"
         to={props.to}
         onClick={() => {
            dispatch(logoutAction());
         }}
      >
         <i className="fa fa-sign-out"></i>
         <p className="logoutLinkText">Sign Out</p>
      </Link>
   );
}

LogoutLink.propTypes = {
   to: propTypes.string.isRequired,
};

export default LogoutLink;
