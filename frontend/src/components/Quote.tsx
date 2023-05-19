import Paper from '@mui/material/Paper';
import './styles/Quote.css'

type QuoteDetails = {
  content: string;
  author: string;
};

type QuoteProps = {
  quote: QuoteDetails
}

const Quote: React.FC<QuoteProps> = ({
  quote
}) => {
  return (
    <Paper className="quote">
      <div className="content">{quote.content}</div>
      <div className="author">- {quote.author}</div>
    </Paper>
  );
}

export default Quote;