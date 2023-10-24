import styled from "styled-components"

const InputWrapper = styled.div`
  position:relative;
  background-color: blue;
  box-shadow: 0px 4px 16px 0px rgba(84, 75, 42, 0.20);
  border-radius: 1.25rem;
  width:95%;
  // display:flex;
  @media (max-width: 973px){
    width: 100%;
    // justify-self:stretch;
    
  }
`;

const InputSearchArea = styled.input`
  width: 95%;
  background-color : #fff;
  border: none;
  padding: 0 1.25rem;
  outline: none;
  font-size: 1rem;
  border-radius: 1.25rem;
  height:3.5rem;

  @media (max-width: 973px){
    width: 100%;
  }
`;

const InputSearchIcon = styled.span`
  position: absolute;
  
  right: -7rem;
  top: 1rem;
  @media (max-width: 973px){
    // padding-right:0.5rem;
  }
`;


const SearchContainer = () => {
    return (
        <InputWrapper>
          <InputSearchArea type="text" className="inputSearchArea" placeholder='Search'/>
          <div>
            <InputSearchIcon>
              {/* <img src='./assets/Search.svg' alt='search' /> */}
            </InputSearchIcon>
          </div>
        </InputWrapper>
    )
}









export default SearchContainer;