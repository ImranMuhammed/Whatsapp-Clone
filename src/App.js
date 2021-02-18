import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import React,{useState} from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <div className="app-body">
      
        <BrowserRouter>
        <Sidebar />
          <Switch>
            <Route path="/:id" component={Chat} >         
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
