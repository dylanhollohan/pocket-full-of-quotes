import Paper from '@mui/material/Paper';
import './styles/Quote.css'

type QuoteDetails = {
  content: string;
  author: string;
  source?: string;
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
      { quote.source && <div className="source">via {quote.source}</div> }
    </Paper>
  );
}

export default Quote;