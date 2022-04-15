import React, { useContext, useEffect, useState } from "react";
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import { AppContext } from '../../../context/appContext';
import CloseIcon from '@material-ui/icons/Close';
// import Slider from '../animation/slider';
import Slide from '@material-ui/core/Slide';

const AlertWrapper = (props) => {
  const {id, type, message, onClose} = props;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => { setChecked(true) }, 100);
  }, [])

  return (
    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
    <div style={{margin:'6px 0px', width: '400px'}}>
      <Alert severity={type} elevation={4} variant="filled"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => onClose(id)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <AlertTitle>{type.toUpperCase()}</AlertTitle>
        {message}
      </Alert>
    </div>   
    </Slide>
  )
}

const MessageWrapper = (props) => {
  const {messgaes, onClose} = props;

  return (
    <div style={{position: 'fixed', bottom: '30px', right: '30px', width: '400px', 
                 display: 'flex', flexDirection: 'column-reverse', zIndex:'10000'}}>
      {
        messgaes.map(item => (
          <AlertWrapper key={item.id}
            id={item.id}
            type={item.message.type}
            message={item.message.text}
            onClose={(id) => onClose(id)}
          />
        ))
      }
    </div>
  )
}

const MessageBarComponet = (props) => {
  const { Messages, dispatch } = useContext(AppContext);
  const messageJSON = JSON.stringify(Messages);
  const { interval } = props;
  const [ myMessages, setMyMessages] = useState([]);

  const [removeMessage, setRemoveMessage] = useState(false);

  useEffect(() => {
    if (removeMessage) {
      myMessages.shift();
      setMyMessages(myMessages);
      setRemoveMessage(false);
    }
  }, [removeMessage, myMessages]);

  useEffect(() => {
    const timer = setInterval(() => setRemoveMessage(true), interval);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, JSON.stringify(myMessages)])

  useEffect(() => {
    Messages.forEach(item => {
      if (!myMessages.find(p => p.id === item.id)) {
        myMessages.push(item);
      }
    });
    setMyMessages(myMessages);
    dispatch({type:'REMOVE_MESSAGES', data: Messages.map(p => p.id)});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageJSON])

  return (
    <MessageWrapper messgaes={myMessages} onClose={(id) => { setMyMessages(myMessages.filter(p => p.id !== id)); }} />
  );
}

export default MessageBarComponet;

