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

type AddQuoteFormProps = {
  closeModal: () => void;
}

const AddQuoteForm: React.FC<AddQuoteFormProps> = ({ closeModal }) => {
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
    console.log('submitted!')
    // dispatch(addQuoteRequest({
    //   author,
    //   content,
    //   source
    // }));
  }


  return (
    <Paper className="add-quote-paper">
      <h1 className="add-quote-header">Add a Quote</h1>
      <FormControl className="add-quote__input-wrapper">
        <InputLabel htmlFor="author-input">Email address</InputLabel>
        <Input id="author-input" type="text" required onChange={handleAuthorChange}/>
      </FormControl>
      <div className="v-space"/>
      <FormControl className="add-quote__input-wrapper">
        <InputLabel htmlFor="content-input">Password</InputLabel>
        <Input id="content-input" required onChange={handleContentChange} type="text"/>
      </FormControl>
      <FormControl className="add-quote__input-wrapper">
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="source-input" onChange={handleSourceChange} type="text" placeholder="Where did you hear/read the quote?"/>
      </FormControl>
      <div className="v-space"/>
      <Box className="add-quote-button-wrapper">
        <Button variant="contained" onClick={handleSubmit}>Submit Quote</Button>
        <Button variant="contained" onClick={closeModal}>Cancel</Button>
      </Box>
    </Paper>
  );
}

export default AddQuoteForm;