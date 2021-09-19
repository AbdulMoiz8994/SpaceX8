import gql from 'graphql-tag';

export const  MissionQuery=gql`
  query MissionList{
    launches {
    mission_id
    mission_name
    launch_success
    launch_year 
  }
  }`


