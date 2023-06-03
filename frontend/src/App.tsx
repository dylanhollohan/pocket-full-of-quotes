import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Login, Signup } from './pages';
import { Navbar, Header, Footer } from './components';
import './index.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
