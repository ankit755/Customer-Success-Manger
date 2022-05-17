import React from 'react';
import Header from './components/Header';
import CSM from './components/CSM';

import './App.css'

function App() {
  return (
   <>
    <div className="main">
    <div className ='Header_main'> <Header /> </div>
    <div className="CSM_main"> <CSM /> </div>
    </div>
   </>
  );
}

export default App;
