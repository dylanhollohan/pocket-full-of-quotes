import { Link } from 'react-router-dom';

import '../index.css';


const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <h1>My Quotes</h1>
            </Link>
            <Link to="/about">
                <h1>About</h1>
            </Link>
        </nav>
    );
};

export default Navbar;