import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <Link to="/">
            <h1>My Quotes</h1>
        </Link>
    );
};

export default Navbar;