import React, { useState, useEffect } from 'react';
import AppRoutes from "./components/AppRoutes";
import useLocalStorage from "./hooks/useLocalStorage"
import NavBar from './components/NavBar';
import JoblyApi from './api/api';
import Loading from './components/Loading';
import UserContext from './components/UserContext';
import './App.css';
import { jwtDecode } from "jwt-decode";

export const TOKEN_KEY = "token"


function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(TOKEN_KEY);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if(token){
        try{
          let{ username } = jwtDecode(token);
          JoblyApi.token = token;
          console.log("Username: ", username);
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          console.log(currentUser);
        } catch(error){
          console.error("Error: ", error);
          setCurrentUser(null);
        }
      }
      setIsPageLoaded(true);
    }
      setIsPageLoaded(false);
      getCurrentUser();
  }, [token])

  function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(userData){
    try{
      let token = await JoblyApi.signup(userData);
      setToken(token);
      console.log("SIGN UP SUCCESSFUL")
      return { success: true };
    } catch(error){
      console.error("Error. Sign up failed. ", error);
      return { success: false, error}
    }
  }

  async function login(userData){
    try{
      let token = await JoblyApi.login(userData);
      setToken(token);
      console.log("LOGIN SUCCESSFUL")
      return { success: true }
    } catch(error){
      console.error("Error. Login Failed. ", error)
      return { success: false, error }
    }
  }

  if(!isPageLoaded) return <Loading />;

  return (
  <div className='App'>
    <UserContext.Provider value = {{currentUser, setCurrentUser}}>
      <NavBar logout={logout}/>  
      <AppRoutes login={login} signup={signup}/>
    </UserContext.Provider>

  </div>
  )
}

export default App
