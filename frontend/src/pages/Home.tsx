import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectLoggedInUser } from '../modules/users/state/selectors';
import { selectAddQuoteRequestStatus, selectAddedQuote, selectQuotes } from '../modules/quotes/state/selectors';
import { Quote, AddQuoteForm } from '../components';

import { getQuotesRequest } from '../modules/quotes/state';
import { RequestStatus } from '../modules/constants';
import { AddQuoteSuccessPayload, AppQuote } from '../modules/quotes/types';
import { QuoteToolbar } from '../components/QuoteToolbar';

import './styles/Home.css';

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
    const [ editingQuote, setEditingQuote ] = useState<boolean>(false);
    const [selectedQuotes, setSelectedQuotes] = useState<Record<string, AppQuote>>({});
    const [toast, setToast] = useState<Toast>({
        display: false,
        text: null,
        severity: Severity.SUCCESS,
    });
    
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

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
            <QuoteToolbar openModal={handleModalOpen} />
            <Snackbar open={toast.display} autoHideDuration={6000} onClose={handleCloseToast} > 
                <Alert  onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%' }} >
                    { toast.text }
                </Alert>
            </Snackbar>
            <Modal className="add-quote-modal" open={modalOpen} onClose={handleModalClose} >
                <AddQuoteForm closeModal={handleModalClose} />
            </Modal>
        </div>
    )
};
