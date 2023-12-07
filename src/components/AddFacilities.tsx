import React, { useEffect, useRef, useState } from "react";
import Select from 'react-select';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import SearchContainer from "./HomePage/SearchContainer";
import CurrentLocation from "./AddFacilities/CurrentLocation";
import CongratsPopUp from "./AddFacilities/CongratsPopUp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css"
import styled from "styled-components";

const Navbar=styled.div`
width:88.5%;
padding-top:10px;
padding-bottom:10px;
// margin-right:auto;
// margin-left:auto;
display:flex;
align-items:center;
background-color:#fff;
z-index:1;
position:absolute;
padding-left:11.5%;
@media(max-width:972px){
  height:30px;
  padding-left:10%;
  // background-color:black;
  // z-index:-1;
}
`
const SearchContainers=styled.div` 
 z-index: 1;
  width:50%;
  margin-top:24px;
  @media(max-width:972px){
    width:65%;
    margin-right:70px;
    margin-top:5px;
  }
`
const FacilityContainer=styled.div`
  background-color: white;
  z-index: 1; 
  border-radius:16px;
  padding:24px;
  width:20%;
  margin-top:24px;
  @media(max-width:972px){
    width:90%;
    border-radius: 20px 20px 0px 0px;
    // margin-bottom:20px;
  }
`
const FacilitySearchWrap=styled.div`
z-index:1;
 display:flex;
 gap:24px;
 justify-content:center; 
 width:90%; 
 margin-right:auto;
 margin-left:auto;
 position:absolute;
 top:10%;
 @media(max-width:972px){
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  flex-direction:flex-end;
  height:93vh;
  width:100%;
 }
 
`
function AddFacilities() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
//   const [liveLocation, setLiveLocation] = useState<{lng:number, lat:number}>({lng: 0, lat: 0});
  const [zoom] = useState<number>(14);
  const [clickedLocation, setClickedLocation] = useState<string>("");
  const [currenLocation, setCurrentLocation] = useState<boolean>(false);
  const [confirmAddress, setConfirmAddress] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    facility_nickname: '',
    floor_number: '',
    location: '',
    service: '',
    
    // Add more form fields as needed
  }); 

  const [customValue, setCustomValue] = useState('');

  maptilersdk.config.apiKey = 'DIALvL1pmYZdL29IO9w0';

  interface MapOptions {
    container: string | HTMLElement;
    style: maptilersdk.ReferenceMapStyle | maptilersdk.MapStyleVariant;
    center: [number, number];
    zoom: number;
  }
  let marker: maptilersdk.Marker | null = null;

  async function reverseGeocoding(lng: number, lat: number) {
    if (!isNaN(lng) && !isNaN(lat)) {
      const result = await maptilersdk.geocoding.reverse([lng, lat]);
      console.log(result);
      const address = result.features[0]?.place_name || "Address not found";
      setClickedLocation(address);
      
      if (marker) {
        marker.setLngLat([lng, lat]);
      } else {
        marker = new maptilersdk.Marker({ color: "#FFD058", draggable: true })
          .setLngLat([lng, lat])
          .addTo(map.current!);
      }

      map.current!.flyTo({
        center: [lng, lat],
        essential: true,
      });
    }
  }

  useEffect(() => {
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {  
          if (map.current) return; // stops map from initializing more than once

            const options: MapOptions = {
              container: mapContainer.current!,
              style: maptilersdk.MapStyle.STREETS,
              center: [position.coords.longitude, position.coords.latitude],
              zoom: zoom,
            };
            
            map.current = new maptilersdk.Map(options);
            new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(map.current!);

            reverseGeocoding(position.coords.longitude, position.coords.latitude);
             // Add a click event listener to the map
            map.current!.on("click", (e) => {
                const coordinates = e.lngLat;
                reverseGeocoding(coordinates.lng, coordinates.lat);
            });
        });
    }
  }, []);

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    // Use the value property of the target to set the state
    const selectedOptionValue = event.target.value;
    setCustomValue(selectedOptionValue);
    setSelectedOption(selectedOptionValue);

  };


  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    formData.location = clickedLocation;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Now you have the form data in the formData state variable
    formData.service = customValue;
    console.log("Handle Submit Reached");
    try {
      const json=JSON.stringify(formData);
      console.log(json);
      const response = await axios.post('https://e14b-122-186-163-190.ngrok-free.app/addfacility', json , {
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.data) {
        throw new Error('Network response was not ok');
      }
  
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(formData);
  };

  const navigate=useNavigate();

  return (
    <>
        <Navbar>
          <img src="./assets/Arrow---Left.png" width={32} height={32} onClick={()=>navigate("/")}/>
          <p style={{ fontSize:"24px"}}>
            Add Facility
          </p>
          
      </Navbar>
    <div style={{
      position: "relative",
      width: "100%",
      height: "90vh",
    }}>
      
      <div ref={mapContainer} style={{
        position: "absolute",
        width: "100%",
        height: "100vh"
      }} />
      
        <FacilitySearchWrap>
          <SearchContainers>
                <SearchContainer/>
          </SearchContainers>
         <FacilityContainer>
            {
              !currenLocation ? (
                <>
                  <CurrentLocation clickedLocation={clickedLocation}/>

                  <div onClick={()=>{setCurrentLocation(true)}} style={{width:"100%", textAlign:"center", backgroundColor:"#0B30B2", color:"white", paddingTop:"17px", paddingBottom:"17px", borderRadius:"20px"}}>
                      Use this location
                  </div>                
                
                </>
              ):(
                <>
                  <form action="/addfacility" method="POST" onSubmit={handleSubmit} className="form">
                    <fieldset style={{borderRadius:"10px", marginBottom:"40px"}}>
                      <legend>Facility nickname*</legend>
                      <input id="facility_nickname" name="facility_nickname" value={formData.facility_nickname} onChange={handleInputChange} style={{border:"none", outline:"none",width:"100%",backgroundColor:"white" }} required type="text"/>
                    </fieldset>
                    <fieldset style={{borderRadius:"10px", marginBottom:"40px"}}>
                      <legend>Unit number/floor</legend>
                      <input id="floor_number" name="floor_number" value={formData.floor_number} onChange={handleInputChange} style={{border:"none", outline:"none",width:"100%",backgroundColor:"white" }} type="text"/>
                    </fieldset>
                    <fieldset style={{ borderRadius: "10px", marginBottom: "40px" }}>
                      <legend>Select an Option</legend>
                      <input 
                        id="service"
                        name="service"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        list="optionsList"
                        style={{ border: "none", outline: "none",width:"100%", backgroundColor:"white" }}
                      />
                      <datalist id="optionsList">
                        <option value="Gym" />
                        <option value="Park" />
                        <option value="School" />
                        {/* Add more options as needed */}
                      </datalist>
                    </fieldset>
                    <CurrentLocation clickedLocation={clickedLocation}/>
                    <button onClick={()=>{setConfirmAddress(true)}} style={{width:"100%", textAlign:"center", backgroundColor:"#0B30B2", color:"white", paddingTop:"17px", paddingBottom:"17px", borderRadius:"20px"}}>
                        Confirm address
                    </button>  
                  </form>
                  
                </>
              )
            }
            {
                (confirmAddress&&currenLocation)&&
                <CongratsPopUp facilityNickName={formData.facility_nickname}/>
            
            }
          </FacilityContainer>
          
        </FacilitySearchWrap>

    </div>
    
    </>
    
  );
}

export default AddFacilities;
