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
    <Paper className="loginPaper">
      <FormControl>
        <div><InputLabel htmlFor="email-input">Email address</InputLabel></div>
        <Input id="email-input" type="email" required/>
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="password-input" required type="password" placeholder="enter password"/>
        <Box display="flex">
          <Button>Sign Up</Button>
          <Button>Sign In</Button>
        </Box>
      </FormControl>
    </Paper>
  );
}

export default LoginForm;