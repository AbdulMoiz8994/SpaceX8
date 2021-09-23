import React from 'react'
import {MissionListQuery} from '../../generated/graphql'
import './styles.css'
import spacex from '../Image/logo192.png'

interface Props{
    data: MissionListQuery | undefined
}


export const MissionList: React.FC<Props> = ({data}) => {
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
                  {data?.launches?.map((value, id) =>{
                    return( <li key={id}><a href="#/">{value?.mission_name}</a></li>)
                  })}
                  </div>
            </ul>
            </div>
              </div>           
        </div>
    )
}
