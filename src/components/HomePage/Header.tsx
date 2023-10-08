import styled from "styled-components";

const Header = styled.header`
    display : flex;
    justify-content : space-between;
    margin-bottom: 3rem;  
    
    @media (max-width: 768px){
        margin-bottom: 1.5rem;
        widht:100%
    }
`;

export default Header;