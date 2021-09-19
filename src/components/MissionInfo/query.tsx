import gql from 'graphql-tag'


export const QUERY_LAUNCHDERAILS=gql`
   query launchID($id: String!) {
  launch(id: $id) {
    launch_success
    launch_year
    mission_name
    details
    rocket {
      rocket_name
      rocket_type
    }
    launch_site {
      site_name
    }
    links {
      flickr_images
      video_link
      wikipedia
    }
  }
}`