import React from "react";
import styled from "styled-components";
const MsgStyle = styled.p`
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;
`;
 function InfoText(props: {msg: string}) {
    return (
        <MsgStyle>{props.msg}</MsgStyle>
    )
}

export default InfoText;