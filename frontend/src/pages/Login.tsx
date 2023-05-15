import LoginForm from '../components/LoginForm';

type LoginProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({ 
  isLoggedIn,
  setIsLoggedIn
}) => {
 
  return (
      <div id="login">
          <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
  )
};