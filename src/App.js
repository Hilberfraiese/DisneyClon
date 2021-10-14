import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Search from './components/Search';
import Filter from './components/Filter';
import MoviesFilter from './components/MovieFilter';
import SeriesFilter from './components/SeriesFilter';
import Watchlist from './components/Watchlist';
import Originals from './components/Originals';

function App() {

    
  return (
       <React.Fragment>
       <Header/>
       <Switch>
         <Route path="/login">
           <Login />
         </Route>
         <Route exact path = '/filter/:id'>
          <Filter/>
         </Route>
         <Route path = '/detail/:id'>
          <Detail/>
         </Route>
         <Route path="/search">
         <Search/>
         </Route>
         <Route path = '/movies'>
          <MoviesFilter/>
         </Route>
         <Route path = '/series'>
          <SeriesFilter/>
         </Route>
         <Route path = '/originals'>
          <Originals/>
         </Route>
         <Route path = '/watchlist'>
          <Watchlist/>
         </Route>
         <Route path = '/'>
          <Home/>
         </Route>
       </Switch>
      </React.Fragment>
  
  );
}

export default App;
