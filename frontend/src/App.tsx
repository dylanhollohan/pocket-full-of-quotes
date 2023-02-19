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
          Created by Dylan Hollohan, 2023
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
