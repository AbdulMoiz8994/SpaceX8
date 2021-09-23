import React, {useState} from 'react';
import './App.css';
import {MissionContainer} from './components/MissionList/index'
import {MissionInfoCont} from './components/MissionInfo/index'
function App() {


   let [id, setId]=useState(10)

 const handleChange=React.useCallback(newID =>{
      setId(newID)
 },[])


  return (
    <div className="App">
      <div>
        <MissionContainer handleChange={handleChange}/>
        </div>
        <div>

        <MissionInfoCont id={id}/>
        </div>
        
    </div>
  );
}

export default App;
