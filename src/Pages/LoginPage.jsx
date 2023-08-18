import React from 'react'
import '../Styles/LoginPage.css';
import LoginButton from '../Components/LoginButton';
import { useSelector } from 'react-redux';

function LoginPage() {
    const hasLoginFailed = useSelector((state) => state.hasLoginFailed);
  return (
    <main className="loginWrapper">
    <section className="loginContent">
       <i className="fa fa-user-circle login_icon"></i>
       <h1>Sign In</h1>
       <form>
          <div className="inputLoginWrapper">
             <label htmlFor="email">E-mail</label>
             <input type="text" id="email" />
          </div>
          <div className="inputLoginWrapper">
             <label htmlFor="password">Password</label>
             <input type="password" id="password" autoComplete="off" />
          </div>
          <div className="rememberWrapper">
             <input type="checkbox" id="remember" />
             <label htmlFor="remember">Remember me</label>
          </div>
          {hasLoginFailed ? (
             <div className="errorMessage">
                Wrong e-mail or password, please check again.
             </div>
          ) : (
             ''
          )}
          <LoginButton />
       </form>
    </section>
 </main>
  )
}

export default LoginPage