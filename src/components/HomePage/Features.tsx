import React from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Navbar=styled.button` 
    display:flex;
    width: 100%;
    height: 128px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 20px 6px rgba(121, 87, 0, 0.10);
    position:relative;
    border:none;
    margin-bottom: 32px;
    margin-top: 32px;
    

    @media(max-width:973px){
        width:46%;
        height: auto;
        margin-bottom: 28px;
        margin-top: 28px;
    }

    @media(min-width: 973px){
        padding-top: 32px;
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

    @media(max-width: 973px){
        width: 48px;
        height: 48px;
        left: 84px;

    }
`
const Png=styled.img`
    width:32px;
    height:32px;
    margin-top:16px;

    @media(max-width: 973px){
        width:24px;
        height:24px;
        margin-top:14px;

    }
`
const Infoarrow=styled.div`
    display:flex;
    flex-direction:row;
    width: 90% !important;
    gap:4px;
    justify-content:space-between;
    align-items:center;
    backgroundcolor:red;

    @media(max-width: 973px){
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
    margin-top:30px;
    padding-left:32px;
    
    @media(max-width: 973px){
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
const ArrowSpan = styled.span`
    @media(max-width: 973px){
        margin-top: 25px;
        margin-right: 16px;
    }
`

export default function Bar(props: {name:string, pic:string,path:string}){
    const navigator=useNavigate();
    return (
            <Navbar onClick={()=>navigator(props.path)}> 
                <Stylecircle>
                    <Png src={props.pic}>
                    </Png>
                </Stylecircle>
                <Infoarrow>
                    <Textstyle>{props.name}</Textstyle>
                    <ArrowSpan><Png src="./assets/Arrow---Right.png" ></Png></ArrowSpan>
                    
                </Infoarrow>
            </Navbar>
    )
}