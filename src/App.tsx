import React from 'react';
import './App.css';
import Container from './components/HomePage/Container';
import Header from './components/HomePage/Header';
import SearchContainer from './components/HomePage/SearchContainer';
import Notification from './components/HomePage/Notification';
import Info from './components/HomePage/InfoText';
import VideoPlayer from './components/HomePage/VideoPlayer';



function App() {
  return (
    <Container>
        <Header>
          <SearchContainer />
          <Notification />
        </Header>
        <Info msg="See how easy it is to setup your facility"/>
        <div style={{backgroundColor:"black", color:"white", display:"flex", gap:"1.5rem"}}>
          <div style={{width:"744px", height:"496px"}}>
            <VideoPlayer/>
          </div>
          <div style={{display:"flex", flexDirection:"column", backgroundColor:"red"}}>
            <div>Add</div>
            <div>Dele</div>
            <div>Mul</div>
          </div>
        </div>
        
    </Container>
  );
}

export default App;
