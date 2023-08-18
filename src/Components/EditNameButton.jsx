import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { changeNamesAction, editNamesAction } from '../Redux/Action';
import '../Styles/EditNameButton.css'

function EditNameButton(props) {
    const dispatch = useDispatch();
  return (
    <button
    className="editNamesButton"
    onClick={() => {
       if (props.title === 'Save') {
          dispatch(changeNamesAction());
       }
       dispatch(editNamesAction());
    }}
 >
    {props.title}
 </button>
  )
}
EditNameButton.propTypes = {
    title: propTypes.string.isRequired,
 };

export default EditNameButton