import Aurelius from '../../public/aurelius.png';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import './styles/Header.css';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { logoutRequest } from '../modules/users/state/actions';
import { selectLogoutRequestStatus } from '../modules/users/state/selectors';

type HeaderProps = {
  isLoggedIn: Boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const dispatch = useAppDispatch();
  const logoutStatus = useAppSelector(selectLogoutRequestStatus);
  
  const handleLogout = () => {
    dispatch(logoutRequest);
  }
  // still need reducer and success action
  console.log('logoutStatus');

  return (
    <header>
      <img className="aurelius" src={Aurelius} alt='Aurelius Nav'/>
      <span className="title">Pocket Full of Quotes</span>
      <span className="quote-and-button">
        <div className="main-quote">
        "A classic book is a book that has never finished saying what it has to say"
        </div>
        <span className="main-quote-author">- Italo Calvino</span>
        
        <Tooltip 
          title="Log out"
          arrow
          placement="left"
          enterDelay={500}
          enterNextDelay={500}
        >
          <Button variant='text' color="info" onClick={handleLogout}>
            <LogoutIcon htmlColor="#383939" fontSize="large"/>
          </Button>
        </Tooltip>
      
      </span>
    </header>
  )
}

export default Header;