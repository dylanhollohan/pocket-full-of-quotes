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
import { AddQuoteSuccessPayload, AppQuote } from '../modules/quotes/types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

enum Severity {
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
    SUCCESS = "success"

}

type Toast = {
    display: boolean,
    text: string | null,
    severity:  Severity,
}  

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectLoggedInUser);
    const addQuoteRequestStatus = useAppSelector(selectAddQuoteRequestStatus);
    const getQuotesRequestStatus = useAppSelector(selectAddQuoteRequestStatus);
    const addedQuote: AddQuoteSuccessPayload | null = useAppSelector(selectAddedQuote);
    const quotes: AppQuote[] = useAppSelector(selectQuotes);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedQuotes, setSelectedQuotes] = useState<Record<string, AppQuote>>({});
    console.log(selectedQuotes);
    const [toast, setToast] = useState<Toast>({
        display: false,
        text: null,
        severity: Severity.SUCCESS,
    });
    
    const [ editingQuote, setEditingQuote ] = useState<boolean>(false);

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const handleShuffle = () => { 
        if (currentUser) { 
            dispatch(getQuotesRequest({ userId: currentUser }));
    }};

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
            setModalOpen(false);
            setToast({
                display: true,
                text: `Quote "${addedQuote.content.slice(0, Math.min(15, addedQuote.content.length))}..." added!`,
                severity: Severity.SUCCESS
            })
        } else if (addQuoteRequestStatus === RequestStatus.FAILURE) {
            setModalOpen(false);
            setToast({
                display: true,
                text: "Failed to add quote.",
                severity: Severity.ERROR
            })
        } 
    }, [addQuoteRequestStatus, addedQuote])

    const handleCloseToast = () => {
        setToast({
            ...toast,
            display: false,
        });
    }

    const handleQuoteClicked = (quote: AppQuote) => {
        const prevRecord = {...selectedQuotes};
        if (quote._id in prevRecord) {
            delete prevRecord[quote._id]
        } else {
            prevRecord[quote._id] = quote;
        }
        setSelectedQuotes(prevRecord);
    }

    return (
        <div className="quotes-flex">
            <div className="quotes-container">
                {quotes.map((quote, index) => {
                
                    return (
                        <button key={`${quote._id}-${index}`} className={`clickable-quote ${quote._id in selectedQuotes ? "selected-quote" : ""}`} onClick={() => handleQuoteClicked(quote)}>
                            <Quote selected={quote._id in selectedQuotes} quote={quote} />
                        </button>
                    )
                })}
            </div>
            <div className="quotes-buttons">
                <div className="quotes-button-wrapper">
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
                            <MapsUgcOutlinedIcon htmlColor="#383939" fontSize="large" onClick={handleModalOpen}/>
                        </Button>
                    </Tooltip>
                </div>
            </div>
            { editingQuote && <Paper>I'm going to be some edit popup</Paper> }
            <Snackbar open={toast.display} autoHideDuration={6000} onClose={handleCloseToast}> 
                <Alert  onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%' }}>
                    { toast.text }
                </Alert>
            </Snackbar>
            <Modal
                className="add-quote-modal"
                open={modalOpen}
                onClose={handleModalClose}
            >
                <AddQuoteForm closeModal={handleModalClose}/>
            </Modal>
        </div>
    )
};
