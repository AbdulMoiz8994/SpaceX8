import React from 'react'
import {LaunchIdQuery} from '../../generated/graphql'
import './style.css'

interface Prop{
    data: LaunchIdQuery | undefined
}


export const MissionInfo:React.FC<Prop> = ({data}) => {
console.log(data);

// loading Sate for Server is coming
if(!data?.launch){
    return (<h1>The Data is Unavailable</h1>)
}


    return (
        <div className="mainMissionInfo">
            <div className="MissionnesteDiv">
                <h1>Mission Details</h1>
                <span>Mission: {data.launch.mission_name}</span>
            </div>
        </div>
    )
}
