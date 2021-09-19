import React from 'react'
import {useMissionListQuery} from '../../generated/graphql'
import {MissionList} from './MissionList'

export const MissionContainer = () => {
    const {data,loading,error}=useMissionListQuery()

    if(loading){
        return <h1>The Data is Loading</h1>
    }
    if(error){
        return <h1>There is an Error</h1>
    }
     console.log(data);
     
    return (
        <div>
            <MissionList  data={data}/>
        </div>
    )
}
