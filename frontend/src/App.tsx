import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Login } from './pages';
import { Navbar, Header } from './components';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const handleLoggedInStatus = (status: Boolean) => {
    setIsLoggedIn(status);
  }
  return (
    <div>
      <BrowserRouter>
        <header>
          <Header isLoggedIn={isLoggedIn}/>
          { isLoggedIn && <Navbar/> }
        </header>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/about"
              element={<About/>}
            />
            <Route
              path="/login"
              element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={handleLoggedInStatus}/>}
            />
          </Routes>
        </div>
        <footer className='footer'>
          <span id="footer-content">Created by Dylan Hollohan</span>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
