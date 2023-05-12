import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';

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
      </FormControl>
    </Paper>
  );
}

export default Quote;