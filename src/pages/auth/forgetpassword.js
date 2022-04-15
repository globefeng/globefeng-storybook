import React, { useState, useEffect } from "react";
import { CircularProgress } from '@material-ui/core';
import TextInput from '../common/textInput';
import { AuthService } from '../../service/auth';
import { Alert, AlertTitle } from '@material-ui/lab';
import { withRouter } from 'react-router-dom';
import StyledButton from '../common/buttons/styledButton';
import Card from './card';
import { DoScroll } from '../../helper/winHelper';

const emailPattern = /^(?=.{1,30}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const ForgetPasswordComponent = (props) => {
  const [ message, setMessage] = useState(null);
  const [ working, setWorking ] = useState(false);
  const [ emailValue, setEmailValue ] = useState('');
  const [ emailError, setEmailError ] = useState(null);
  
  useEffect(() => {
    DoScroll();
  }, []);

  const onSubmit = () => {
    var hasError = false;
    if (!emailPattern.test(emailValue.trim())) {
      setEmailError("Invalid email");
      hasError = true;
    }

    if (hasError) return;

    setWorking(true);

    AuthService.sendResetCode(emailValue).then(resp => {
      setMessage({type: 'success', description: 'An email have been send to your email address, please click the link in your email to reset your password.'});
      setWorking(false);
    }, error => {
      setMessage({type: 'error', description: 'Failed to send reset password email to you.'});
      setWorking(false);
    })
  };

  const onEmailChange = (value) => {
    setEmailValue(value);
    setEmailError(null);
  }

  return (
    <Card title="Forget password">

      <form style={{ fontSize: '18px' }}>

        <div style={{marginBottom:'20px'}}>
          <TextInput name="email" label="Email" type="text" errorMessage={emailError} value={emailValue} onChange={onEmailChange} />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <label>Please enter your email and submit, we will send the reset link to your email.</label>
        </div>

        <div style={{ marginBottom: '40px' }}>
          {message && <Alert severity={message.type}><AlertTitle>{message.type.toUpperCase()}</AlertTitle>{message.description}</Alert>}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <StyledButton 
              type="button"
              style={{ width: '100%', 
                      backgroundColor: '#0B74A4', 
                      color: '#FFFFFF', 
                      fontSize: '16px',
                      padding: '12px',
                      marginBottom: '2px',
              }}
              onClick={onSubmit}
            >
              {working && <CircularProgress size={18} color="inherit" style={{marginRight: '20px'}} />}
              Submit
          </StyledButton>
        </div>

      </form>

    </Card>
  )
}

export default withRouter(ForgetPasswordComponent);