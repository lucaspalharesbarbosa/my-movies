import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from './components/Header';
import { About } from './views/About';
import { Home } from "./views/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
