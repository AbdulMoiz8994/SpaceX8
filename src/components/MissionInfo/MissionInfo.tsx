import React from 'react'
import { LaunchIdQuery } from '../../generated/graphql'
import './style.css'

interface Prop {
    data: LaunchIdQuery | undefined
}


export const MissionInfo: React.FC<Prop> = ({ data }) => {
    // console.log(data);

    // loading Sate for Server is coming
    if (!data?.launch) {
        return (<h1>The Data is Unavailable</h1>)
    }


    return (
        <div>
        <div className="mainMissionInfo">
            <div className="MissionnesteDiv">
                <h1>Mission Details</h1>
                <span className="span-Sucessfail">
                    Mission:
                    {data.launch.launch_success ? (
                        <span className="Success">Success</span>
                    ) : (
                        <span className="Fail">Fail</span>
                    )
                    }
                </span>
                <h1>{data.launch.mission_name}               
                 {data.launch.rocket &&  ` / ${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type}`}
                </h1>
                <p className="description">{data?.launch.details && `${data.launch.details}`}</p>
            </div>
             
        </div>
        <div className="Images_Div">
                 {data?.launch?.links && data?.launch?.links?.flickr_images && (
                      <div>
                          {data?.launch?.links.flickr_images.map((img) =>
                           img?  <img src={img} alt={img} key={img} className="image" />: null
                          )}
                      </div>
                 )}
             </div>
        </div>
    )
}
