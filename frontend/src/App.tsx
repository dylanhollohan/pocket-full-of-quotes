import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Login } from './pages';
import { Navbar, Header, Footer } from './components';
import './index.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleLoggedInStatus = (status: boolean) => {
    setIsLoggedIn(status);
  }
  return (
    <div>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn}/>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={handleLoggedInStatus} />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
