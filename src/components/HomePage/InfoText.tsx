import React from "react";
import styled from "styled-components";
const MsgStyle = styled.p`
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;

    @media(max-width:973px){
        font-size: 18px;
        color: #0F1532
        font-weight: 500;
        font-style: normal;
        line-height:22px;
        letter-spacing: 0.25px
        margin-bottom: 1rem;
        text-align: center;
    }
`;
 function InfoText(props: {msg: string}) {
    return (
        <MsgStyle>{props.msg}</MsgStyle>
    )
}

export default InfoText;