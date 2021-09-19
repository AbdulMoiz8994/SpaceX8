import React from 'react';
import './App.css';
import {MissionContainer} from './components/MissionList/index'
import {MissionInfoCont} from './components/MissionInfo/index'
function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>   
        <MissionContainer/>
        <div>
        <MissionInfoCont/>
        </div>
    </div>
  );
}

export default App;
