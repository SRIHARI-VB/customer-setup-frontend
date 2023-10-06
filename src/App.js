import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';
import Notification from './components/Notification';
import Info from './components/Info';
import VideoPlay from './components/VideoPlay';



function App() {
  return (
    <Container>
        <Header>
          <SearchContainer />
          <Notification />
        </Header>
        <Info msg="See how easy it is to setup your facility"/>
        <VideoPlay/>
    </Container>
  );
}

export default App;
