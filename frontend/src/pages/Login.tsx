import LoginForm from '../components/LoginForm';
import './styles/Login.css';

export const Login: React.FC = () => {
  return (
      <div className="login-container">
          <LoginForm/>
      </div>
  )
};