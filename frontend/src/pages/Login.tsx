import LoginForm from '../components/LoginForm';
import './styles/Login.css';

// type LoginProps = {
//   isLoggedIn: boolean;
//   setIsLoggedIn: (status: boolean) => void;
// }

export const Login: React.FC = () => {
  return (
      <div className="login-container">
          <LoginForm/>
      </div>
  )
};