import React, { useEffect, useRef, useState } from "react";
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

function AddFacilities() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
//   const [liveLocation, setLiveLocation] = useState<{lng:number, lat:number}>({lng: 0, lat: 0});
  const [zoom] = useState<number>(14);
  const [clickedLocation, setClickedLocation] = useState<string>("");

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

  return (
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
      <div style={{ position: "absolute", top: 10, left: 10, background: "white", padding: 10, zIndex: 1 }}>
        <p>Clicked Location Address: {clickedLocation}</p>
      </div>
    </div>
  );
}

export default AddFacilities;
