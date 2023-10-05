import React from "react";
import './SearchContainer.css';


const SearchContainer = () => {
    return (
        <div class="input-group">
          <input type="text" class="form-login" placeholder='Search'/>
          <div class="input-group-append">
            <span class="input-group-text">
              <img src='./assets/Search.svg' alt='search' />
            </span>
          </div>
        </div>
    )
}

export default SearchContainer;