import React from 'react'
import {MissionListQuery} from '../../generated/graphql'

interface Props{
    data: MissionListQuery | undefined
}


export const MissionList: React.FC<Props> = ({data}) => {
    console.log(data);
    
    return (
        <div>
            
        </div>
    )
}
