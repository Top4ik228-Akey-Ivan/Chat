/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route, Navigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import Login from "./pages/login";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { Registration } from "./pages/registration";
import { fetchChats } from "./redux/slices/chats";

import Header from "./components/Profile/header/header";
import Chats from "./components/Profile/chats/chats";
import ChatPage from "./components/Profile/chats/chatPage";
import Services from "./components/Profile/services/services";
import ServicesInfo from "./components/Profile/servicesInfo/ServicesInfo";

import Profile from "./pages/profile/profile";

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
    
  const me = useSelector(state => state.auth.data)
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  React.useEffect(() => {
    if (me!==null) {
      dispatch(fetchChats(me._id))
    }    
  }, [me])


  return ( 
    <> 
      <Header /> 
      <div className="main"> 
        {/* Условное отображение Services */}
        {location.pathname !== '/login' && location.pathname !== '/register' && <Services />} 

        <Routes> 
          <Route path="/" element={isAuth ? <Navigate to="/chats" /> : <Navigate to="/login" />} /> 
          <Route path="login" element={<Login />} /> 
          <Route path="register" element={<Registration />} /> 
          <Route path="chats" element={<Chats />} /> 
          <Route path="chats/:chatId" element={<ChatPage />} /> 
          <Route path="profile" element={<Profile />} /> 
        </Routes> 
        
        {/* Условное отображение ServicesInfo */}
        {location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/profile' && <ServicesInfo />} 
      </div> 
    </> 
  );
  
}

export default App;
