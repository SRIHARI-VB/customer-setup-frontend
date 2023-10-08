import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    width:36px ;
    height:36px;
    border-radius: 1.25rem;
    display: flex;
    background-color: white;
    padding-top:10px;
    margin-top:5px;
    justify-content:space-evenly;
    @media (max-width:768px){
        background: none;
        margin-top:-45px;
        // margin-bottom:20px;
        margin-right:20px;
        width:100%;

    }
`;
const Notify = styled.div`
    backgrond-color:black;

    
`;
const Notification = () => {
    return (
        <Wrapper>
            <Notify>
                <img src="./assets/Notification.svg" alt="notification" />
            </Notify>
            
        </Wrapper>
    )
}

export default Notification;