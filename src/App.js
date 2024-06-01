import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import {  BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "./components/Header.js";
import { Watchlist } from "./components/Watchlist.js";
import { Watched } from "./components/Watched.js";
import { Add } from "./components/Add.js";
import "./App.css";
import { WatchlistPublic } from "./components/WatchlistPublic.js";
import { WatchedPublic } from "./components/WatchedPublic.js";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import {MovieList} from "./components/MovieList.js";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
function App() {
 
  return (
    
    <GlobalProvider>
    
        
         <Router>
      <Routes>
         
          <Route  path="/" element={<Home />} />
          
          
    
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login/>} />
          <Route  path="/watchlistPublic" element={<WatchlistPublic />} />
          <Route path="/watchedPublic" element={<WatchedPublic/>}/>
        </Routes>

       
       <Routes>
          <Route  path="/movielist" element={<MovieList />} />
        <Route path="/add" element={<Add />}/>
         
        
          <Route  path="/hits" element={<Watchlist />} />
        <Route path="rotten" element={<Watched />}/>
       
       
         

      </Routes>
        
      </Router>
  </GlobalProvider>
  );
}

export default App;
