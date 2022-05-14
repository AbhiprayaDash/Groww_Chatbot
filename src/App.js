import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from './components/homecomponent';
import StockComponent from './components/stockcomponent';
import GoldComponent from './components/goldcomponent';

function App() {
  // useEffect(() => {
  //   (function(d, m){
  //     var kommunicateSettings = 
  //         {"appId":"25ff8cf9eb11112b6467ad19b447e13d1","popupWidget":true,"automaticChatOpenOnNavigation":true};
  //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     console.log()
  //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  //     window.kommunicate = m; m._globals = kommunicateSettings;
  // })(document, window.kommunicate || {});
  // },[]);
  // return (
  //   <div className="App">
  //     <h1>Welcome to react</h1>
  //   </div>
  // );
  return(
    <Routes>
      <Route path="/home" element={<HomeComponent/>}/>
      <Route path="/stocks" element={<StockComponent/>}/>
      <Route path="/gold" element={<GoldComponent/>}/>
    </Routes>
  )
}

export default App;
