import React from 'react';
import {useLaunchIdQuery} from '../../generated/graphql'
import {MissionInfo} from './MissionInfo'

export const MissionInfoCont=() =>{


   const {data,loading,error}=useLaunchIdQuery({
       variables:{
           id: "10"
       }
   });
   if(loading){
       return <h1>The Data is Loading</h1>
   }
   if(error){
       return <h1>There is an Error</h1>
   }
   console.log(data);
   

   return(
       <div>
          <MissionInfo data={data}/>
       </div>
   )
}