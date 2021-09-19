import React from 'react'
import {LaunchIdQuery} from '../../generated/graphql'


interface Prop{
    data: LaunchIdQuery | undefined
}


export const MissionInfo:React.FC<Prop> = ({data}) => {
console.log(data);

    return (
        <div>
            
        </div>
    )
}
