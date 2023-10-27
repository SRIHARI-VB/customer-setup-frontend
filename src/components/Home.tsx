import React from "react";
import styled from "styled-components";
import Container from "./HomePage/Container";
import InfoText from "./HomePage/InfoText";
import Features from "./HomePage/Features";
import VideoPlayer from "./HomePage/VideoPlayer";



const VideoFeatureWrap = styled.div`
  display: flex;
//   background-color: #000;
  gap: 2rem;
  width:100%;
  padding: 0;
  // flex-wrap:wrap;
  @media(max-width:973px){
    gap:44px;
    flex-direction:column;
  }

`;

const VideoWrap = styled.div`
  width: 100%;
  
//   background-color: red;
  @media(max-width:973px){
    width:100%;
  }
  @media(min-width:973px){
    min-width:600px;
  }
`

const FeaturesWrap = styled.div`

  display:flex;
  flex-wrap:wrap;
  

  @media(max-width:973px){
    width:100%;
    display:flex; 
    justify-content:space-between;
    flex-wrap:wrap;
    gap:1rem;
  }
`;

const LapViewHeader=styled.div`
  @media(max-width:973px){
    display:block;

  }
`
function Home(){
    return(
        <Container>
      
      {/* <LapViewHeader>
        <Header>
          <SearchContainer/>
          <Notification/>
        </Header> */}
        
        {/* <Notification/> */}
        {/* <Header>
          <div style={{display:"flex", width:"2000%"}}>
          <SearchContainer/>
          </div>
          
          <Notification/>
        </Header> */}
      {/* </LapViewHeader> */}

      <div style={{display:'flex', flexDirection:'row', width:"100%", height:"100%", justifyContent:"space-between", gap:"2rem"}}>
          <div style={{backgroundColor:'white', height:'3.5rem',borderRadius:"1.25rem", width:"100%", position:"relative"}}>
            <input type="text" placeholder='Search' style={{width:"100%", height:"3.5rem", fontSize:"1rem", outline:"none", border:"none", borderRadius:"1.25rem"}} />
          </div>
          <div style={{backgroundColor:"white", width:"56px", height:"56px", borderRadius:"20px",display:"flex",alignItems:"center", justifyContent:"center"}}>
            <img width={24} height={24} src="./assets/Notification.svg" alt="notification" />
          </div>

      </div>
      
      <InfoText msg="See how easy it is to setup your facility"/>
      <VideoFeatureWrap>
        <VideoWrap>
          <VideoPlayer/>
        </VideoWrap>
        
        
        <FeaturesWrap>
          <Features name="Add Facility" pic="./assets/Facility.png" path="/addfacilities"/>
          <Features name="Add Users" pic="./assets/Team.png" path='/'/>
          <Features name="Activate ARK wallet" pic="./assets/Payment.png" path='/'/>
        </FeaturesWrap>
        
      </VideoFeatureWrap>
        
    </Container>
    )
}

export default Home;