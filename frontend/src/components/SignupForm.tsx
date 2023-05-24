import { useState } from 'react';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import './styles/SignupForm.css';
import { useAppDispatch } from '../state/hooks';
import { fetchDummy } from '../modules/users/state';  // may be able to shorten

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
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  } 

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  } 

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  } 

  const handleSignup = () => {
    dispatch(fetchDummy(
      username
    ));
  }

  return (
    <Paper className="signup-paper">
      <h1 className="signup-header">Sign Up</h1>
      <FormControl className="signup__input-wrapper">
        <InputLabel htmlFor="signup__username-input">Username</InputLabel>
        <Input id="signup__username-input" type="text" required value={username} onChange={handleUsernameChange}/>
      </FormControl>
      <div className="v-space"/>
      <FormControl className="signup__input-wrapper">
        <InputLabel htmlFor="signup__email-input">Email address</InputLabel>
        <Input id="signup__email-input" type="email" required value={email} onChange={handleEmailChange}/>
      </FormControl>
      <div className="v-space"/>
      <FormControl className="signup__input-wrapper">
        <InputLabel htmlFor="signup__password-input">Password</InputLabel>
        <Input id="signup__password-input" required type="password" placeholder="enter password" value={password} onChange={handlePasswordChange}/>
      </FormControl>
      <div className="v-space"/>
      <Box className="signup-button-wrapper">
        <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
        <Button variant="contained">go to Log In page</Button>
      </Box>
    </Paper>
  );
}

export default SignupForm;