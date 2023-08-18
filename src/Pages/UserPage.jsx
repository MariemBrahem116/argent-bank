import React  from 'react';
import Account from '../Components/Account';
import '../Styles/UserPage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditNameButton from '../Components/EditNameButton';

function UserPage() {
   const firstName = useSelector((state) => state.auth.firstName);
   const lastName = useSelector((state) => state.auth.lastName);
   const isLoggedIn = useSelector((state) => state.isLoggedIn);
   const isNameEdited = useSelector((state) => state.isNameEdited);
  return (
   <main className="profileWrapper">
         {isLoggedIn ? (
            <div>
               <div className="welcomeWrapper">
                  <h1 className="welcomeText">Welcome back</h1>
                  {isNameEdited ? (
                     <div>
                        <div className="inputNameWrapper">
                           <input
                              className="inputName"
                              type="text"
                              id="firstname"
                              defaultValue={firstName}
                           />
                           <input
                              className="inputName"
                              type="text"
                              id="lastname"
                              defaultValue={lastName}
                           />
                        </div>
                        <div className="buttonWrapper">
                           <EditNameButton title="Save" />
                           <EditNameButton title="Cancel" />
                        </div>
                     </div>
                  ) : (
                     <div>
                        <h1 className="nameText">
                           {firstName + ' ' + lastName + '!'}
                        </h1>
                        <EditNameButton title="Edit Name" />
                     </div>
                  )}
               </div>
               <h2 className="sr-only">Accounts</h2>

               <Account
                  title="Argent Bank Checking (x8349)"
                  amount="2,082.79"
                  description="Available Balance"
               />
               <Account
                  title="Argent Bank Savings (x6712)"
                  amount="10,928.42"
                  description="Available Balance"
               />
               <Account
                  title="Argent Bank Credit Card (x8349)"
                  amount="184.30"
                  description="Current Balance"
               />
            </div>
         ) : (
            <div className="redirectionWrapper">
               <h1 className="redirectionText">
                  You are logged out. <br /> Please sign in to see your personal
                  page.
               </h1>
               <Link className="redirectionLink" to="/login">
                  <h2>&#8594;</h2>
                  <h2 className="signinText">Sign In</h2>
                  <h2>&#8592;</h2>
               </Link>
            </div>
         )}
      </main>
  )
}

export default UserPage