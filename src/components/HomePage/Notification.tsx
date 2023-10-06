import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    width: 5%;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff!important;
`
const Notification = () => {
    return (
        <Wrapper>
            <img src="./assets/Notification.svg" alt="notification" />
        </Wrapper>
    )
}

export default Notification;