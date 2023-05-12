type LoginProps = {
  isLoggedIn: Boolean;
  setIsLoggedIn: (status: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({ 
  isLoggedIn,
  setIsLoggedIn
}) => {
 
  return (
      <div id="login">
          <div>
              
          </div>
      </div>
  )
};