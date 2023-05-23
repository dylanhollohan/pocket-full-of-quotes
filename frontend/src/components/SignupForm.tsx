import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import './styles/SignupForm.css';

// type QuoteDetails = {
//   content: string;
//   author: string;
// };

type SignupFormProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
  isLoggedIn,
  setIsLoggedIn
}) => {
  return (
    <Paper className="signup-paper">
      <h1 className="signup-header">Sign Up</h1>
      <FormControl className="username-input-wrapper">
        <InputLabel htmlFor="username-input">Username</InputLabel>
        <Input id="username-input" type="text" required/>
      </FormControl>
      <FormControl className="email-input-wrapper">
        <InputLabel htmlFor="email-input">Email address</InputLabel>
        <Input id="email-input" type="email" required/>
      </FormControl>
      <FormControl className="password-input-wrapper">
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="password-input" required type="password" placeholder="enter password"/>
      </FormControl>
      <Box className="signup-button-wrapper">
        <Button variant="contained">Sign Up</Button>
        <Button variant="contained">go to Sign In page</Button>
      </Box>
    </Paper>
  );
}

export default SignupForm;