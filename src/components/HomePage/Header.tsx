import styled from "styled-components";

const Header = styled.header`
    display : flex;
    justify-content : space-between;
    margin-bottom: 3rem;  
    background-color:red;
    padding-right:56px;
    width:100%;
    
    @media (max-width: 973px){
        margin-bottom: 1.5rem;
        widht:100%;
        padding:0;
    }
`;

export default Header;