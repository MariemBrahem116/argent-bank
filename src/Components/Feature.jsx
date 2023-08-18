import React from 'react';
import propTypes from 'prop-types';
import '../Styles/Feature.css'

function Feature(props) {
    return (
        <div className="featureWrapper">
           <img className="featureIcon" src={props.icon} alt={props.iconType} />
           <h3 className="featureTitle">{props.title}</h3>
           <p>{props.description}</p>
        </div>
     );
  }

  Feature.propTypes = {
     icon: propTypes.node.isRequired,
     iconType: propTypes.string.isRequired,
     title: propTypes.string.isRequired,
     description: propTypes.string.isRequired,
  }
export default Feature