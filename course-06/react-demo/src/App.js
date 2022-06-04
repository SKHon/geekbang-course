import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Page01 from './components/Page01';
import Page02 from './components/Page02';
import Page03 from './components/Page03';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <ul>
          <li>
            <Link to="/page01">page01</Link>
          </li>
          <li>
            <Link to="/page02">page02</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Welcome />}/>
          <Route path='/page01' element={<Page01 />}/>
          <Route path='/page02' element={<Page02 />}/>
          <Route path='/page03' element={<Page03 />}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
