import React from 'react';
import styled from 'styled-components';
import Container from './components/HomePage/Container';
import Header from './components/HomePage/Header';
import SearchContainer from './components/HomePage/SearchContainer';
import Notification from './components/HomePage/Notification';
import InfoText from './components/HomePage/InfoText';
import VideoPlayer from './components/HomePage/VideoPlayer';
import Features from "./components/HomePage/Features";

const VideoFeatureWrap = styled.div`
  display: flex;
  flex-wrap:wrap;
  @media(max-width:768px){
    gap:44px;
    flex-direction:column;
  }

`;

const FeaturesWrap = styled.div`
  display:flex;
  flex-wrap:wrap;

  @media(max-width:768px){
    width:100%;
    display:flex; 
    justify-content:space-between;
    flex-wrap:wrap;
    gap:1rem;
  }
`;

const VideoWrap = styled.div`
  border-radius: 20px;
`;


function App() {
  return (
    <Container>
      {/* <div style={{backgroundColor:"black", width:"100%", height:"48px"}}> */}

      {/* </div> */}
      <Notification/>
      <Header>
        <SearchContainer/>
        
      </Header>
      <InfoText msg="See how easy it is to setup your facility"/>
      <VideoFeatureWrap>
        {/* <VideoWrap> */}
          <VideoPlayer/>
        {/* </VideoWrap> */}
        
        <FeaturesWrap>
          <Features name="Add Facility" pic="./assets/Facility.png"/>
          <Features name="Add Users" pic="./assets/Team.png"/>
          <Features name="Activate ARK wallet" pic="./assets/Payment.png"/>

        </FeaturesWrap>
        
      </VideoFeatureWrap>
        
    </Container>
  );
}

export default App;
