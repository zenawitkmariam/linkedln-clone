import React from 'react';
import './App.css';
import Header from './components/header'
import SideBar from './components/sideBar';
import Display from './components/display';
import Widget from './components/widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app_body'>
         <SideBar />
         <Display />
         <Widget />
      </div>
    </div>
  );
}

export default App;
