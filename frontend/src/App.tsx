import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About } from './pages';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Header/>
          <Navbar/>
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
