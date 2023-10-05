import React from "react";
import styled from "styled-components";
const MsgStyle = styled.p`
    font-size: 1.5rem;
    padding: 1rem;
`;
const Info = ({msg}) => {
    return (
        <MsgStyle>{msg}</MsgStyle>
    )
}

export default Info;