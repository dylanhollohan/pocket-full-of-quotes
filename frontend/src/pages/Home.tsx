import { Quote } from '../components'
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import Button from '@mui/material/Button';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

export const Home: React.FC = () => {
    const quotes = [
        {author: "Hugo Chavez", content: "I'm some quote thats a bit long djdhaskdhkjd"},
        {author: "jp", content: "I'm some quote thats a bit long"},
        {author: "jp", content: "I'm some quote thats a bit long djdhaskdhkjd but this one is so much longer that its about three lines or so in real life or even elike a whole paragraph"},
        {author: "jp", content: "I'm some quote thats a bit long djdhaskdhkjd I'm some quote thats a bit long djdhaskdhkjd I'm some quote thats a bit long djdhaskdhkjd"},
        {author: "Jordan B. Peterson", content: "I'm some quote thats a bit long djdhaskdhkjd"}
    ];
    return (
        <div className="quotes-flex">
            <div className="quotes-container">
                {quotes.map((quote) => {
                    return (
                    <Quote quote={quote}></Quote>   
                    )
                })}
            </div>
            <div className="quotes-buttons">
                <Button variant="text" color="info">
                    <ShuffleOutlinedIcon htmlColor="#383939" fontSize="large"/>
                </Button>
                <Button  variant="text" color="info">
                    <MapsUgcOutlinedIcon htmlColor="#383939" fontSize="large"/>
                </Button>
                
            </div>
        </div>
    )
};