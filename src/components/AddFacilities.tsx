import React from "react";
import {Map,GoogleApiWrapper} from "google-maps-react"
function AddFacilities(props: { google: any; }){
    console.log(props.google);
    return(
        
           <Map
           google={props.google}
           style={{width:"100%",height:"100%"}}
           initialCenter={
            {
                lat:12.9716,
                lng:77.5946
            }
           }
           />
    )
}
export default GoogleApiWrapper({
    apiKey:"AIzaSyC4vj5By3n3TVGId34E7xS2FWQxaBrce-M"
})(AddFacilities)