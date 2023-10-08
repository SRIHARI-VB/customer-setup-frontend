import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    width: 5%;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: white;

    @media (max-width:768px){
        background: none;
        margin-top:-32px;
        margin-bottom:28px;
        width:100%;
        justify-content:end;

    }
`
const Notification = () => {
    return (
        <Wrapper>
            <img src="./assets/Notification.svg" alt="notification" />
        </Wrapper>
    )
}

export default Notification;