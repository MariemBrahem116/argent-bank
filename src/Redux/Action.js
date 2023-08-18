
// --------------- ACTIONS ---------------

export function loginAction(navigate) {
    return (dispatch) => {
       const email = document.getElementById('email').value;
       const password = document.getElementById('password').value;
       const body = JSON.stringify({ 'email': email, 'password': password });

       // Post on /user/login to get the token
       fetch('http://localhost:3001/api/v1/user/login', {
          body: body,
          headers : { 'Content-Type': 'application/json' },
          method: "POST"
       })
       .then(response => {
          if (response.ok) {
             return response.json();
          }
       })
       .then(response => {
          const token = response.body.token;
          // Post on /user/profile to get user data with the found token
          fetch("http://localhost:3001/api/v1/user/profile", {
             headers: {
                'Authorization': 'Bearer' + response.body.token,
                'Content-Type': 'application/json'
             },
             method: "POST"
          })
          .then(response => {
             if (response.ok) {
                return response.json();
             }
          })
          .then(response => {
             dispatch(loginSuccessAction(response.body, token));
             navigate("/user");
          })
          .catch(function(error) {
             dispatch(loginFailureAction(error));
          })
       })
       .catch(function(error) {
          dispatch(loginFailureAction(error));
       })
    }
 }

 export function loginSuccessAction(body, token) {
    localStorage.setItem('id', body.id);
    localStorage.setItem('email', body.email);
    localStorage.setItem('firstName', body.firstName);
    localStorage.setItem('lastName', body.lastName);
    localStorage.setItem('token', token);
    return {
       type: "LOGIN_SUCCESS_ACTION",
       payload: { body, token }
    }
 }

 export function loginFailureAction(error) {
    console.log("Error at fetch:", error.message);
    return {
       type: "LOGIN_FAILURE_ACTION"
    }
 }

 export function logoutAction() {
    localStorage.clear();
    return {
       type: "LOGOUT_ACTION"
    }
 }

 export function editNamesAction() {
    return {
       type: "EDIT_NAMES_ACTION"
    }
 }

 export function changeNamesAction() {
    return (dispatch) => {

       const firstName = document.getElementById('firstname').value;
       const lastName = document.getElementById('lastname').value;
       const body = JSON.stringify({ 'firstName': firstName, 'lastName': lastName });
       const token = localStorage.getItem('token');

       // Put on /user/profile to update the user names
       fetch("http://localhost:3001/api/v1/user/profile", {
          body: body,
          headers: {
             'Authorization': 'Bearer' + token,
             'Content-Type': 'application/json'
          },
          method: "PUT"
       })
       .then(response => {
          if (response.ok) {
             return response.json();
          }
       })
       .then(data => {
          dispatch({
             type: "CHANGE_NAMES_ACTION",
             payload: { firstName, lastName }
          })
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
       })
       .catch(function(error) {
          console.log("Error at fetch:" + error.message);
       })
    }
 }
