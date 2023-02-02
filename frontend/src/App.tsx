import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
