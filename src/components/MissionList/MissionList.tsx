import React,{useEffect, useState} from 'react'
import {MissionListQuery} from '../../generated/graphql'
import './styles.css'
import spacex from '../Image/logo192.png'

export interface OwnProps{
  handleChange:(newID: number) => void;
}


interface Props extends OwnProps{
    data: MissionListQuery | undefined}


export const MissionList: React.FC<Props> = ({data,handleChange}) => {
    console.log(data);
    
   const [height, setHight]=useState('')
useEffect(() =>{

  setInterval(() => {
    setHight(document.body.scrollHeight + 600 + 'px')
},100)
}, [])


    return (
        <div className="mainDiv">
          <div className="first_child" style={{maxHeight: height}}>
              {/* <h1>SpaceX Missions</h1>
               */}
               <img src={spacex} alt="" />
              <div className="listDiv">
            <ul className="UL">
            <div className="list_items">
                  {data?.launches?.map((value, ind) =>{
                    return( <li key={ind}><a href="#/" onClick={() => handleChange(ind!)}  >{value?.mission_name} - {value?.launch_year}</a></li>)                    
                  })}
                  </div>
            </ul>
            </div>
              </div>           
        </div>
    )
}
