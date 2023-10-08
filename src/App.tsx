import React from 'react';
import './App.css';
import Container from './components/HomePage/Container';
import Header from './components/HomePage/Header';
import SearchContainer from './components/HomePage/SearchContainer';
import Notification from './components/HomePage/Notification';
import Info from './components/HomePage/InfoText';
import VideoPlayer from './components/HomePage/VideoPlayer';
import Features from "./components/HomePage/Features"


function App() {
  return (
    <Container>
        <Header>
          <SearchContainer />
          <Notification />
        </Header>
        <Info msg="See how easy it is to setup your facility"/>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div style={{width:"744px", height:"496px", borderRadius:"16px", }}>
            <VideoPlayer/>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <Features name="Add location" pic="./assets/Facility.png"/>
            <Features name="Add Users" pic="./assets/Team.png"/>
            <Features name="Add ARK wallet" pic="./assets/Payment.png"/>
          </div>
        </div>
        
    </Container>
  );
}

export default App;
