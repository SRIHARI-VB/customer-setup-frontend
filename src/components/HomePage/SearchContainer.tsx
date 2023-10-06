import styled from "styled-components"

const InputWrapper = styled.div`
  position:relative;
  width: 88%;
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
`;

const InputSearchIcon = styled.span`
  position: absolute;
  right: 0;
  top: 1rem;
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