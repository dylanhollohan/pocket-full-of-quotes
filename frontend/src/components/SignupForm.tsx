import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import FormHelperText from '@mui/material/FormHelperText';

import './styles/SignupForm.css';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { signupRequest } from '../modules/users/state';
import { resetSignup } from '../modules/users/state/actions';
import { selectSignupRequestStatus } from '../modules/users/state/selectors';
import { RequestStatus } from '../modules/users/constants';

const SignupForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signupStatus = useAppSelector(selectSignupRequestStatus);
  console.log(signupStatus);
  // above will become a selector on the logged-in user check for redirecting elsewhere.

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
    dispatch(signupRequest({
      username,
      email,
      password
    }));
  }

  // @ts-ignore
  useEffect(() => {
    if (signupStatus === RequestStatus.SUCCESS) {
      navigate('/');
    }
    return () => dispatch(resetSignup());
  }, [dispatch, navigate, signupStatus])

  // grab global state of the signup request, and determine where to conditionally render some error messages if the state is FAILED (could include error message in red
  // inside the v-space sections)
  // if sign up success, redirect to the login page

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
        <Input
          id="signup__password-input"
          required
          type="password"
          placeholder="enter password"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* <FormHelperText error>some text</FormHelperText> */}
      </FormControl>
      <div className="v-space"/>
      <Box className="signup-button-wrapper">
        <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
        <Link to="/login">
          <Button variant="contained">go to Log In page</Button>
        </Link>
      </Box>
    </Paper>
  );
}

export default SignupForm;