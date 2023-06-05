import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';

import Aurelius from '../../public/aurelius.png';
import './styles/Header.css';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { logoutRequest } from '../modules/users/state';
import { resetLogout } from '../modules/users/state/actions';
import { selectLoggedInUser, selectLogoutRequestStatus } from '../modules/users/state/selectors';
import { RequestStatus } from '../modules/users/constants';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutStatus = useAppSelector(selectLogoutRequestStatus);
  const loggedInUser = useAppSelector(selectLoggedInUser);
  
  const handleLogout = () => {
    dispatch(logoutRequest);
  }

  // @ts-ignore
  useEffect(() => {
    if (logoutStatus === RequestStatus.SUCCESS) {
      navigate('/login');
    }
    return () => dispatch(resetLogout);
  }, [dispatch, navigate, logoutStatus])


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
          <Button
            variant={loggedInUser ? 'text' : 'outlined'}
            color="info"
            disabled={!loggedInUser}
            onClick={handleLogout}
            endIcon={<LogoutIcon htmlColor={loggedInUser ? '#383939' : '#888989'} fontSize="large"/>}
            >
            Logout
          </Button>
        </Tooltip>
      
      </span>
    </header>
  )
}

export default Header;