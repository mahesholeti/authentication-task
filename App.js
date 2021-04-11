import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import useToken from './useToken';


function App() {
  // const authData = {
  //   "user1": {
  //     "name": "Admin",
  //     "permission": "all",
  //     "password": "Admin"
  //   },
  //   "user2": {
  //     "name": "MyName",
  //     "permission": "none",
  //     "password": "test"
  //   }
  // }

  const authData = {
    user1: {
      name: "Admin",
      permission: "all",
      password: "admin"
    },
    user2: {
      name: "MyName",
      permission: "none",
      password: "test"
    }
  }

  // const [user,setUser] = useState({ email: '', password: ''});
  const {token,setToken} = useToken();
  // const [error,setError] = useState('');

  // const Login = (details,token) => {
  //   console.log(details);
  //   setUser(details);
  //   localStorage.setItem('token2',JSON.stringify(token));
  // }

  // const Logout = () => {
  //   console.log("Logout");
  // }

  // useEffect(() => {
  //   console.log("Component Mounted")
  //   console.log(token)
  //   const loggedInUser = localStorage.getItem("token2")
  //   if(loggedInUser) {
  //     setToken(loggedInUser);
  //     console.log(loggedInUser);
  //   }
  // },[])

  // const token = getToken();

  if(!token) {
    return <LoginForm setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
