import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    width:5% ;
    height: 3.5rem;
    border-radius: 1.25rem;
    display: flex;
    background-color: white;
    padding-top:10px;
    margin-top:5px;
    justify-content:center;
    align-items:center;
    @media (max-width:973px){
        background: none;
        margin-top:-45px;
        // margin-bottom:20px;
        margin-right:20px;
        width:100%;

    }
`;
const Notify = styled.div`
    backgrond-color:black;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    // @media (max-width:973px){
    //     width: 24px;
    //     height: 24px;
    //     margin-top:10px;
    // }
    
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