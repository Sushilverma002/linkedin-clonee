import React from 'react';
import './App.css';
import Header from './Header'
import HeaderOptions from './HeaderOptions.js';
import SideBar from './SideBar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      <HeaderOptions/>
      
      {/* App body */}
      <div className="app__Body">
        {/* left slide bar */}
        <SideBar/>
        {/* app feed */}
        <Feed/>
        {/* widgets */}
      </div>

        
    </div>
  );
}

export default App;
