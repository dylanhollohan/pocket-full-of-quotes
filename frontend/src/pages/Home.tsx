import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

import { useAppSelector } from '../state/hooks';
import { selectLoggedInUser } from '../modules/users/state/selectors';
import { Quote, AddQuoteForm } from '../components';

import './styles/Home.css';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const currentUser = useAppSelector(selectLoggedInUser);
    const [open, setOpen] = useState(false);
    const [ editingQuote, setEditingQuote ] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    
    const quotes = [
        {author: "Hugo Chavez", content: "I'm some quote thats a bit long djdhaskdhkjd", source: "Theo Von Podcast"},
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
                <Tooltip 
                    title={<h3 className="quotes-tooltip">Shuffle Quotes</h3>}
                    arrow
                    placement="right"
                    enterDelay={500}
                    enterNextDelay={500}
                    >
                    <Button variant="text" color="info">
                        <ShuffleOutlinedIcon htmlColor="#383939" fontSize="large"/>
                    </Button>
                </Tooltip>
                <Tooltip 
                    title={<h3 className="quotes-tooltip">Add Quote</h3>}
                    arrow
                    placement="right"
                    enterDelay={500}
                    enterNextDelay={500}
                    >
                    <Button variant="text" color="info">
                        <MapsUgcOutlinedIcon htmlColor="#383939" fontSize="large" onClick={handleOpen}/>
                    </Button>
                </Tooltip>
            </div>
            { editingQuote && <Paper>I'm going to be some edit popup</Paper> }
            <Modal
                className="add-quote-modal"
                open={open}
                onClose={handleClose}
            >
                <AddQuoteForm closeModal={handleClose}/>
            </Modal>
        </div>
    )
};

// .quote {
//     padding: 10px 30px;
//     margin-bottom: 15px;
//     font-family: 'EB Garamond', serif;
//   }

//   <Box sx={style}>
//      Some content just to check
//   </Box>