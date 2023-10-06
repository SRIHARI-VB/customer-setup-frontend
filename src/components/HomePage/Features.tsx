import React from "react"
import styled from "styled-components"

const Navbar=styled.button` 
    display:flex;
    // flex-direction:row;
    // align-item:center;
    width: 360px;
    height: 128px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 20px 6px rgba(121, 87, 0, 0.10);
    margin:20px 10px;
    position:relative;
    border:none;
`;

const Stylecircle=styled.div`
width: 64px;
height: 64px;
flex-shrink: 0;
background-color:#FFE5A0;
border-radius:100%;
display:flex;
justify-content:center;
align-item:center;
position:absolute;
top:-15%;
left:32px;
// left:10px;
`
const Png=styled.img`
width:32px;
height:32px;
margin-top:16px;
`
const Infoarrow=styled.div`
display:flex;
flex-direction:row;
margin-top:50px;
justify-content: space-between;
width:80%;
padding-left:32px;

`
const Textstyle=styled.h1`
color: #0F1532;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px; 
`

export default function Bar(props: {name:string, pic:string}){
    return (
       <div >
            <Navbar> 
                <Stylecircle>
                    <Png src={props.pic}>
                    </Png>
                </Stylecircle>
                <Infoarrow>
                    <Textstyle>{props.name}</Textstyle>
                    <Png src="Arrow---Right.png" ></Png>
                </Infoarrow>
            </Navbar>
       </div>
    )
}