import React from 'react'
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
    
    return (
        <div className="mainDiv">
          <div className="first_child">
              {/* <h1>SpaceX Missions</h1>
               */}
               <img src={spacex} alt="" />
              <div className="listDiv">
            <ul className="UL">
            <div className="list_items">
                  {data?.launches?.map((value, ind) =>{
                    return( <li><a href="#" onClick={() => handleChange(ind!)}  key={ind}>{value?.mission_name}</a></li>)                    
                  })}
                  </div>
            </ul>
            </div>
              </div>           
        </div>
    )
}
