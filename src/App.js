import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import HeaderOptions from './HeaderOptions.js';
import SideBar from './SideBar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgetss from './Widgetss';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //LOGIN AND LOG OUT
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        //user is logged in
        dispatch(
          login({
            email:userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl: userAuth.profilePic,
          })
        );
      }else{
        //user is logged out
        dispatch(logout());
      }
    });
  },[dispatch]);

  return (
    <div className="app">

      {/* Header */}
      <Header/>
      <HeaderOptions/>
      {!user ? <Login/> :(
        <div className="app__Body">
        <SideBar/>
        <Feed/>
        <Widgetss/>
        </div>
      )}
     
    </div>
  );
}

export default App;
