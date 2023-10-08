import React from "react"
import styled from "styled-components"

const Navbar=styled.button` 
    display:flex;
    width: 360px;
    height: 128px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 20px 6px rgba(121, 87, 0, 0.10);
    position:relative;
    border:none;

    @media(max-width:768px){
        width:46%;
        height: auto;
        margin-bottom: 28px;
    }
`;

const Stylecircle=styled.div`
    width: 64px;
    height: 64px;
    background-color:#FFE5A0;
    border-radius:100%;
    display:flex;
    justify-content:center;
    align-item:center;
    position:absolute;
    top:-15%;
    left:32px;

    @media(max-width: 768px){
        width: 48px;
        height: 48px;
        left: 84px;

    }
`
const Png=styled.img`
    width:32px;
    height:32px;
    margin-top:16px;

    @media(max-width: 768px){
        width:24px;
        height:24px;
        margin-top:14px;

    }
`
const Infoarrow=styled.div`
    display:flex;
    flex-direction:row;
    width: 100%
    gap:4px;

    @media(max-width: 768px){
        margin-top:20px;
    }+

`
const Textstyle=styled.p`
    color: #0F1532;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    postion: absolute;
    text-align: left;


    @media(max-width: 768px){
        width:100%;
        font-size: 18px;
        font-weight:700;
        letter-spacing: 0.15px;
        line-spacing: 50px!important;
        padding-top:10px;
        margin-left: 16px;
        margin-right: 16px;
        line-height:22px;
        

    }
`

export default function Bar(props: {name:string, pic:string}){
    return (
            <Navbar> 
                <Stylecircle>
                    <Png src={props.pic}>
                    </Png>
                </Stylecircle>
                <Infoarrow>
                    <Textstyle>{props.name}</Textstyle>
                    <span style={{marginTop:"25px", marginRight:"16px"}}><Png src="./assets/Arrow---Right.png" ></Png></span>
                    
                </Infoarrow>
            </Navbar>
    )
}