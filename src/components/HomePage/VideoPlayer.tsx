import React from "react";
import ReactPlayer from "react-player";
// import Video from "./assets/buisness-team.mp4";

const VideoPlay = () =>{
    return (
        <ReactPlayer
            url="./assets/buisness-team.mp4"
            width="100%"
            height="100%"
            controls={true}
        />
    )
}
export default VideoPlay;