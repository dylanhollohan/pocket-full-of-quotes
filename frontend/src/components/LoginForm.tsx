import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// type QuoteDetails = {
//   content: string;
//   author: string;
// };

type LoginFormProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  isLoggedIn,
  setIsLoggedIn
}) => {
  return (
    <Paper id="login-paper">
      <h1 id="login-header">Log In</h1>
      <FormControl id="email-input-wrapper">
        <InputLabel htmlFor="email-input">Email address</InputLabel>
        <Input id="email-input" type="email" required/>
      </FormControl>
      <FormControl id="password-input-wrapper">
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="password-input" required type="password" placeholder="enter password"/>
      </FormControl>
      <Box id="login-button-wrapper">
        <Button variant="contained">Sign Up</Button>
        <Button variant="contained">Sign In</Button>
      </Box>
    </Paper>
  );
}

export default LoginForm;