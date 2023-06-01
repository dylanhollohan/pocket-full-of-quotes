import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

import { useAppSelector } from '../state/hooks';
import { selectLoggedInUser } from '../modules/users/state/selectors';
import { Quote } from '../components';

import './styles/Home.css';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const currentUser = useAppSelector(selectLoggedInUser);
    const [ editingQuote, setEditingQuote ] = useState<boolean>(false);
    
    const quotes = [
        {author: "Hugo Chavez", content: "I'm some quote thats a bit long djdhaskdhkjd"},
        {author: "jp", content: "I'm some quote thats a bit long"},
        {author: "jp", content: "I'm some quote thats a bit long djdhaskdhkjd but this one is so much longer that its about three lines or so in real life or even elike a whole paragraph"},
        {author: "jp", content: "I'm some quote thats a bit long djdhaskdhkjd I'm some quote thats a bit long djdhaskdhkjd I'm some quote thats a bit long djdhaskdhkjd"},
        {author: "Jordan B. Peterson", content: "I'm some quote thats a bit long djdhaskdhkjd"}
    ];

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate])

    return (
        <div className="quotes-flex">
            <div className="quotes-container">
                {quotes.map((quote, index) => {
                    return (
                        <Quote quote={quote} key={`${quote.author}-${index}`}></Quote>  
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
            { editingQuote && <Paper>I'm going to be some edit popup</Paper> }
        </div>
    )
};