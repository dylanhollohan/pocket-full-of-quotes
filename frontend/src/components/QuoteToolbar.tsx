import Tooltip from '@mui/material/Tooltip';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectLoggedInUser } from '../modules/users/state/selectors';
import { getQuotesRequest } from '../modules/quotes/state';

import './styles/QuoteToolbar.css';

type QuoteToolbarProps = {
  openModal: () => void;
}

export const QuoteToolbar: React.FC<QuoteToolbarProps> = ({
  openModal
}) => {

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectLoggedInUser);
  const handleShuffle = () => { 
    if (currentUser) { 
        dispatch(getQuotesRequest({ userId: currentUser }));
  }};

  const handleEdit = () => { 
    console.log("handle edit");
  };

  const handleDelete = () => { 
    console.log("handle edit");
  };

  return (
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
                  <MapsUgcOutlinedIcon htmlColor="#383939" fontSize="large" onClick={openModal}/>
              </Button>
          </Tooltip>
          <Tooltip 
              title={<h3 className="quotes-tooltip">Edit Quote</h3>}
              arrow
              placement="right"
              enterDelay={500}
              enterNextDelay={500}
              >
              <Button variant="text" color="info">
                  <EditOutlinedIcon htmlColor="#383939" fontSize="large" onClick={handleEdit}/>
              </Button>
          </Tooltip>
          <Tooltip 
              title={<h3 className="quotes-tooltip">Delete selected quote(s)</h3>}
              arrow
              placement="right"
              enterDelay={500}
              enterNextDelay={500}
              >
              <Button variant="text" color="info">
                  <DeleteOutlinedIcon htmlColor="#383939" fontSize="large" onClick={handleDelete}/>
              </Button>
          </Tooltip>
      </div>
    </div>
  )
}
