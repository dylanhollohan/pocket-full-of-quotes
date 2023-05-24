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
      <FormControl className="signup__input-wrapper">
        <InputLabel htmlFor="signup__username-input">Username</InputLabel>
        <Input id="signup__username-input" type="text" required/>
      </FormControl>
      <div className="v-space"/>
      <FormControl className="signup__input-wrapper">
        <InputLabel htmlFor="signup__email-input">Email address</InputLabel>
        <Input id="signup__email-input" type="email" required/>
      </FormControl>
      <div className="v-space"/>
      <FormControl className="signup__input-wrapper">
        <InputLabel htmlFor="signup__password-input">Password</InputLabel>
        <Input id="signup__password-input" required type="password" placeholder="enter password"/>
      </FormControl>
      <div className="v-space"/>
      <Box className="signup-button-wrapper">
        <Button variant="contained">Sign Up</Button>
        <Button variant="contained">go to Log In page</Button>
      </Box>
    </Paper>
  );
}

export default SignupForm;