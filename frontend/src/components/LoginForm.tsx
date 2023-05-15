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

const Quote: React.FC<LoginFormProps> = ({
  isLoggedIn,
  setIsLoggedIn
}) => {
  return (
    <Paper className="loginPaper">
      <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="emailInput"/>
      </FormControl>
      <Box display="flex">
        <Button>Sign Up</Button>
        <Button>Sign In</Button>
      </Box>
    </Paper>
  );
}

export default Quote;