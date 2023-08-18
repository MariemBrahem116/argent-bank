import React from 'react';
import propTypes from 'prop-types';
import '../Styles/Account.css';

function Account(props) {
    return (
        <section className="accountWrapper">
           <div className="accountContent">
              <h3 className="accountTitle">{props.title}</h3>
              <p className="accountAmount">{'$' + props.amount}</p>
              <p className="accountDescription">{props.description}</p>
           </div>
           <div className="accountContent cta">
              <button className="transactionButton">View transactions</button>
           </div>
        </section>
     );
}
Account.propTypes = {
    title: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
 };

export default Account