import React, { useEffect, useRef, useState } from "react";
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import SearchContainer from "./HomePage/SearchContainer";
import Container from "./HomePage/Container";
import { relative } from "path";
import CurrentLocation from "./AddFacilities/CurrentLocation";
import CongratsPopUp from "./AddFacilities/CongratsPopUp";
import Searchable from "./AddFacilities/Searchable"
import { useNavigate } from "react-router-dom";
function AddFacilities() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
//   const [liveLocation, setLiveLocation] = useState<{lng:number, lat:number}>({lng: 0, lat: 0});
  const [zoom] = useState<number>(14);
  const [clickedLocation, setClickedLocation] = useState<string>("");
  const [currenLocation, setCurrentLocation] = useState<boolean>(false);
  const [confirmAddress, setConfirmAddress] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState('');
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

  const navigate=useNavigate();

  return (
    <>
        <div style={{width:"85%", paddingTop:"10px", paddingBottom:"10px", marginRight:"auto", marginLeft:"auto", display:"flex",alignItems:"center"}}>
          <img src="./assets/Arrow---Left.png" width={32} height={32} onClick={()=>navigate("/")}/>
          <p style={{ fontSize:"24px"}}>
            Add Facility
          </p>
          
      </div>
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh"
    }}>
      
      <div ref={mapContainer} style={{
        position: "absolute",
        width: "100%",
        height: "100vh"
      }} />
      
        <div style={{zIndex:1, display:"flex", justifyContent:"center", width:"90%", marginRight:"auto", marginLeft:"auto"}}>
          <div style={{  zIndex: 1, width:"70%", marginTop:"24px"}}>
                <SearchContainer/>
          </div>
          <div style={{ background: "white",  zIndex: 1, borderRadius:"16px",padding:"24px", width:"20%", marginTop:"24px"}}>
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
                  <fieldset style={{borderRadius:"10px", marginBottom:"40px"}}>
                    <legend>Facility nickname*</legend>
                    <input style={{border:"none", outline:"none", }} required type="text"/>
                  </fieldset>
                  <fieldset style={{borderRadius:"10px", marginBottom:"40px"}}>
                    <legend>Unit number/floor</legend>
                    <input style={{border:"none", outline:"none", }} type="text"/>
                  </fieldset>
                  <div style={{width:"100%"}}><Searchable/></div>
                  
                  <CurrentLocation clickedLocation={clickedLocation}/>
                  <div onClick={()=>{setConfirmAddress(true)}} style={{width:"100%", textAlign:"center", backgroundColor:"#0B30B2", color:"white", paddingTop:"17px", paddingBottom:"17px", borderRadius:"20px"}}>
                      Confirm address
                  </div>  
                </>
              )
            }
            {
              
              
              (confirmAddress&&currenLocation)&&
                <CongratsPopUp/>
              
            }
              
          </div>

        </div>

    </div>
    
    </>
    
  );
}

export default AddFacilities;
