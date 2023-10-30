import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddFacilities from './components/AddFacilities';


function App() {
  return (
    <div> 
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/facility' element={<AddFacilities/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
