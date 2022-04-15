import React, { useContext, useState, useEffect } from "react";
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import TextInput from '../common/textInput';
import { AuthService } from '../../service/auth';
import { AppContext } from '../../context/appContext';
import { Alert, AlertTitle } from '@material-ui/lab';
import { withRouter } from 'react-router-dom';
import StyledButton from '../common/buttons/styledButton';
import Card from './card';
import { DoScroll } from '../../helper/winHelper';

const letterPattern = /^(?=.*[A-Za-z]).+$/
const digitPattern = /^(?=.*[0-9]).+$/
const emailPattern = /^(?=.{1,30}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,20}$/;
// pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/               

const Flex = styled.div`
  display: flex;
  color: ${(props) => props.ready ? "#008800" : props.theme.text.color };
  font-weight: ${(props) => props.ready ? "bold" : "normal" };
`;

const StyledSpan = styled.div`
  width: 20px;
`;

const SignUp = (props) => {
  const { dispatch } = useContext(AppContext);
  const [ working, setWorking ] = useState(false);
  const [ hasError, setHasError ] = useState(false);
  
  const [ countReady, setCountReady ] = useState(false);
  const [ letterReady, setLetterReady ] = useState(false);
  const [ digitReady, setDigitReady ] = useState(false);
  const [ matchReady, setMatchReady ] = useState(false);
  
  const[ emailValue, setEmailValue ] = useState('');
  const[ emailError, setEmailError ] = useState(null);
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState(null);
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ confirmPasswordError, setConfirmPasswordError ] = useState(null);

  useEffect(() => {
    DoScroll();
  }, []);

  const onEmailChange = (value) => {
    setHasError(false);
    setEmailValue(value);
    setEmailError(null);
  }

  const onPasswordChange = (value) => {
    const text = value.trim();
    setCountReady(text.length >= 6 && text.length <=20);
    setLetterReady(letterPattern.test(text));
    setDigitReady(digitPattern.test(text));
    setHasError(false);
    setPassword(text);
    setPasswordError(null);
    if (text.length >= 6 && text.length <=20 && letterPattern.test(text) && digitPattern.test(text) && confirmPassword === text) {
      setMatchReady(true);
    }
    else {
      setMatchReady(false);
    }
  }

  const onConfirmPasswordChange = (value) => {
    const text = value.trim();
    setHasError(false);
    setConfirmPassword(text);
    setConfirmPasswordError(null);
    setMatchReady(password === text);
  }

  const onCreate = data => {
    var passed = true;
    if (!emailPattern.test(emailValue.trim())) {
      setEmailError("Invalid email");
      passed = false;
    }
    if (!(password.length >= 6 && password.length <=20 && letterPattern.test(password) && digitPattern.test(password))) {
      setPasswordError("Invalid password");
      passed = false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Password not match");
      passed = false;
    }

    if (!passed) return;

    setWorking(true);
    setHasError(false);
    AuthService.register(emailValue, password).then(resp => {
      setWorking(false);
      dispatch({type:'ADD_MESSAGE', data: {type: 'success', text: `An email has been sent to your email, please check your email and activate your account`}});
    }, error => { setWorking(false); setHasError(true); }); 
  };

  return (
    <Card title="Create Account">

      <form style={{ fontSize: '18px' }}>

        <TextInput name="email" label="Email" type="text" errorMessage={emailError} onChange={onEmailChange} />
        <TextInput name="password" label="Password" type="password" errorMessage={passwordError} onChange={onPasswordChange} />
        <TextInput name="confirmpassword" label="Confirm Password" type="password" errorMessage={confirmPasswordError} onChange={onConfirmPasswordChange} />

        <div style={{ marginBottom: '16px' }}>
          <label>Password must include the following:</label>
          <div style={{paddingLeft: '30px', fontSize: '16px'}}>
            <Flex ready={countReady}>{countReady ? <StyledSpan>&#10004;</StyledSpan> : <StyledSpan>&#8226;</StyledSpan> } Use between 6 and 20 characters</Flex>
            <Flex ready={letterReady}>{letterReady ? <StyledSpan>&#10004;</StyledSpan> : <StyledSpan>&#8226;</StyledSpan>} Include at least one letter</Flex>
            <Flex ready={digitReady}>{digitReady ? <StyledSpan>&#10004;</StyledSpan> : <StyledSpan>&#8226;</StyledSpan>} Include at least one digit</Flex>
            <Flex ready={matchReady}>{matchReady ? <StyledSpan>&#10004;</StyledSpan> : <StyledSpan>&#8226;</StyledSpan>} Passwords match</Flex>
          </div>
        </div>

        <div style={{marginBottom:'16px'}}>
          {hasError && <Alert severity='error'><AlertTitle>ERROR</AlertTitle>Fail to create account. Email is already registered.</Alert>}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <StyledButton 
              type="button"
              style={{ width: '100%', 
                      backgroundColor: '#0B74A4', 
                      // cursor: IsReady() ? 'pointer' : 'not-allowed',
                      color: '#FFFFFF', 
                      fontSize: '16px',
                      padding: '12px',
                      marginBottom: '2px',
              }}
              onClick={onCreate}
            >
              {working && <CircularProgress size={18} color="inherit" style={{marginRight: '20px'}} />}
              Create Account
          </StyledButton>
        </div>

      </form>

    </Card>
  )
}

export default withRouter(SignUp);