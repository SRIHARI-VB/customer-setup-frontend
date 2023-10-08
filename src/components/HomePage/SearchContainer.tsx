import styled from "styled-components"

const InputWrapper = styled.div`
  position:relative;
  box-shadow: 0px 4px 16px 0px rgba(84, 75, 42, 0.20);
  border-radius: 1.25rem;
  width:88%;
  @media (max-width: 768px){
    width: 100%;
  }
`;

const InputSearchArea = styled.input`
  width: 100%;
  background-color : #fff;
  border: none;
  padding: 0 1.25rem;
  outline: none;
  font-size: 1rem;
  border-radius: 1.25rem;
  height:3.5rem;

  @media (max-width: 768px){
    width: 90%;
  }
`;

const InputSearchIcon = styled.span`
  position: absolute;
  right: 0;
  top: 1rem;
  @media (max-width: 768px){
    padding-right:1rem;
  }
`;


const SearchContainer = () => {
    return (
        <InputWrapper>
          <InputSearchArea type="text" className="inputSearchArea" placeholder='Search'/>
          <div>
            <InputSearchIcon>
              <img src='./assets/Search.svg' alt='search' />
            </InputSearchIcon>
          </div>
        </InputWrapper>
    )
}









export default SearchContainer;