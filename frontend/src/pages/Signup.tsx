import SignupForm from '../components/SignupForm';
import './styles/Signup.css';

type SignupProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

export const Signup: React.FC<SignupProps> = ({ 
  isLoggedIn,
  setIsLoggedIn
}) => {
  return (
      <div className="signup-container">
          <SignupForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
  )
};