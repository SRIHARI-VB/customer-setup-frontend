import React from "react";
import styled from "styled-components";
const MsgStyle = styled.p`
color: var(--fonts-n-900, #0F1532);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 32px; /* 160% */
letter-spacing: 0.25px;
margin-top:32px;
margin-bottom:32px;
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