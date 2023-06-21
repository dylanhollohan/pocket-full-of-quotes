import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectLoggedInUser } from '../modules/users/state/selectors';
import { selectAddQuoteRequestStatus, selectAddedQuote, selectQuotes } from '../modules/quotes/state/selectors';
import { Quote, AddQuoteForm } from '../components';

import './styles/Home.css';
import { getQuotesRequest } from '../modules/quotes/state';
import { RequestStatus } from '../modules/constants';

type Toast = {
    display: boolean,
    text: string | null,
    severity:  "error" | "warning" | "info" | "success",
}  
// TO DO:  make an enum here
// TO DO: figure out the auto-hide for the toast

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectLoggedInUser);
    const addQuoteRequestStatus = useAppSelector(selectAddQuoteRequestStatus);
    const getQuotesRequestStatus = useAppSelector(selectAddQuoteRequestStatus);
    const addedQuote = useAppSelector(selectAddedQuote);
    const quotes = useAppSelector(selectQuotes);
    const [open, setOpen] = useState(false);
    const [toast, setToast] = useState<Toast>({
        display: false,
        text: null,
        severity: "success",
    });
    
    const [ editingQuote, setEditingQuote ] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleShuffle = () => {
        if (currentUser) {
            dispatch(getQuotesRequest({ userId: currentUser }));
        }
    }

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        if (currentUser) {
            dispatch(getQuotesRequest({ userId: currentUser }));
        }
    }, [currentUser, dispatch]);

    useEffect(() => {
        if (addQuoteRequestStatus === RequestStatus.SUCCESS && addedQuote) {
            setOpen(false);
            setToast({
                display: true,
                text: `Quote "${addedQuote.content.slice(0, 8)}..." added!`, // consider an index out of bounds fix
                severity: "success"

            })
        } else if ( addQuoteRequestStatus === RequestStatus.FAILURE) {
            setOpen(false);
            setToast({
                display: true,
                text: "Failed to add quote.",
                severity: "error"
            })
        } 
    }, [addQuoteRequestStatus])

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
      ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <div className="quotes-flex">
            <div className="quotes-container">
                {quotes.map((quote, index) => {
                    return (
                        <Quote quote={quote} key={`${quote.author}-${index}`}/>
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
                    <Button variant="text" color="info" onClick={handleShuffle}>
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
            { /* add onclose if necessary */}
            <Snackbar open={toast.display} autoHideDuration={6000}> 
                <Alert  severity={toast.severity} sx={{ width: '100%' }}> {/*add onClose if needed */}
                    { toast.text }
                </Alert>
            </Snackbar>
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
