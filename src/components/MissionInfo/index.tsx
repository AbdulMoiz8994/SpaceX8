import React, { useEffect } from 'react';
import {useLaunchIdQuery} from '../../generated/graphql'
import {MissionInfo} from './MissionInfo'


interface Props{
    id: number
}


export const MissionInfoCont=({id}:Props) =>{


   const {data,loading,error,refetch}=useLaunchIdQuery({
       variables:{
        //    we add String because the id key has string type and we need to convert it number to string
           id: String(id)
       }
   });

//    useEffect(() =>{
//        refetch()
//    },[id])
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