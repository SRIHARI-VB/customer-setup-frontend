import React from 'react';
function CurrentLocation(props:any){
    return (
        <>
            <p style={{fontWeight:"600",fontFamily:"Manrope", fontSize:"16px",lineHeight:"1.25rem", letterSpacing:"0.15px", marginBottom:"16px"}}>Current location </p>
            <p style={{fontWeight:"400",fontFamily:"Manrope", fontSize:"16px",lineHeight:"1.25rem", letterSpacing:"0.15px", fontStyle:"normal"}}>{props.clickedLocation}</p>
        </>
    )
}
export default CurrentLocation;