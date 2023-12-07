import styled from "styled-components";
import { useState } from "react";

const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media(max-width:972px){
    margin:0px;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 90%;
  border-radius: 20px;
  object-fit: fit;
  background-color: #ebebeb;
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #ffffff;
  border-radius: 100%;
  @media (max-width: 973px){
    top: 45%;
    width: 48px;
    height: 48px;
    
  }
`;

const PlayButton = styled.img`
    width: 32px;
    height: 32px;
  cursor: pointer;
    @media (max-width: 973px){
        width: 24px;
        height: 24px;
    }
`;



const VideoPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video:any = document.getElementById("videoPlayer");

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <PlayerContainer>
      <VideoPlayer
        id="videoPlayer"
        poster="./assets/Thumbnail.webp"
        src="./assets/business-team.mp4"
        controls
      />
      {!isPlaying && (
        <PlayButtonWrapper>
          <PlayButton
            src="./assets/Play.png"
            alt="Play"
            onClick={handlePlayClick}
          />
        </PlayButtonWrapper>
      )}
    </PlayerContainer>
  );
};

export default VideoPlay;
