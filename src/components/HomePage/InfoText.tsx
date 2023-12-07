import React from "react";
import styled from "styled-components";
const MsgStyle = styled.p`
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;

    @media(max-width:973px){
        font-size: 14px;
        color: #0F1532
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25px
        margin: 0;
        text-align: center;
        padding:0;
    }
`;
 function InfoText(props: {msg: string}) {
    return (
        <MsgStyle>{props.msg}</MsgStyle>
    )
}

export default InfoText;