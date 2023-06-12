import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectLoggedInUser } from '../modules/users/state/selectors';
import { loginRequest } from '../modules/users/state';
import './styles/LoginForm.css';

const AddQuoteForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectLoggedInUser);
  const [author, setAuthor] = useState<String>("");
  const [content, setContent] = useState<String>("");
  const [source, setSource] = useState<String>("");

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  } 

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  } 

  const handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSource(e.target.value);
  } 

  const handleSubmit = () => {
    dispatch(addQuoteRequest({
      author,
      content,
      source
    }));
  }


  return (
    <Paper className="login-paper">
      <h1 className="login-header">Log In</h1>
      <FormControl className="login__input-wrapper">
        <InputLabel htmlFor="email-input">Email address</InputLabel>
        <Input id="email-input" type="email" required onChange={handleEmailChange}/>
      </FormControl>
      <div className="v-space"/>
      <FormControl className="login__input-wrapper">
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="password-input" required onChange={handlePasswordChange} type="password" placeholder="enter password"/>
      </FormControl>
      <div className="v-space"/>
      <Box className="login-button-wrapper">
        <Button variant="contained" onClick={handleLogin}>Log In</Button>
        <Link to="/signup">
          <Button variant="contained">Go to Sign Up page</Button>
        </Link>
      </Box>
    </Paper>
  );
}

export default LoginForm;