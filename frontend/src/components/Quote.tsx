import Paper from '@mui/material/Paper';
import './styles/Quote.css'

type QuoteDetails = {
  content: string;
  author: string;
  source?: string;
  _id: string;
  userId: string;
};

type QuoteProps = {
  quote: QuoteDetails,
  selected: boolean
}

const Quote: React.FC<QuoteProps> = ({
  quote,
  selected
}) => {
  return (
    <Paper className="quote" >
      <div className={`content ${selected ? "selected-content" : ""}`}>{quote.content}</div>
      <div className="author">- {quote.author}</div>
      { quote.source && <div className="source">via {quote.source}</div> }
      {/* a space to optionally include a parsed date  */}
    </Paper>
    
  );
}

export default Quote;