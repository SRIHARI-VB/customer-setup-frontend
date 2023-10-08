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

const LapViewHeader=styled.div`
  @media(max-width:768px){
    display:block;

  }
`


function App() {
  return (
    <Container>
      <LapViewHeader>
        
        {/* <Notification/> */}
        <Header>
          <div style={{display:"flex", width:"2000%"}}>
          <SearchContainer/>
          </div>
          
          <Notification/>
        </Header>
      </LapViewHeader>
      
      <InfoText msg="See how easy it is to setup your facility"/>
      <VideoFeatureWrap>
          <VideoPlayer/>
        
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
