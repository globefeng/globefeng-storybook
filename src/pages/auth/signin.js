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

const TextLink = styled.span`
  color: #0B74A4;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const emailPattern = /^(?=.{1,30}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const SignIn = (props) => {
  const { dispatch } = useContext(AppContext);
  const [ working, setWorking ] = useState(false);
  const [ hasError, setHasError ] = useState(false);
  const [ emailValue, setEmailValue ] = useState('');
  const [ passwordValue, setPasswordValue ] = useState('');
  const [ emailError, setEmailError ] = useState(null);
  const [ passwordError, setPasswordError ] = useState(null);
  
  useEffect(() => {
    DoScroll();
  }, []);

  const onSubmit = () => {
    var hasError = false;
    if (!emailPattern.test(emailValue.trim())) {
      setEmailError("Invalid email");
      hasError = true;
    }
    if (passwordValue.trim().length < 1) {
      setPasswordError("Invalid password");
      hasError = true;
    }

    if (hasError) return;

    setWorking(true);
    setHasError(false);
    AuthService.login(emailValue.trim(), passwordValue.trim()).then(resp => {
      setWorking(false);
      dispatch({type: 'LOGIN', data: resp.data});
      AuthService.setUserInfo(JSON.stringify(resp.data));
      if (props.returnPath) {
        props.history.push({ pathname: '/', search: props.returnPath });
      }
      else {
        props.history.push('/');
      }
    }, error => { setWorking(false); setHasError(true); }); 
  };

  const onEmailChange = (value) => {
    setHasError(false);
    setEmailValue(value);
    setEmailError(null);
  }

  const onPasswordChange = (value) => {
    setHasError(false);
    setPasswordValue(value);
    setPasswordError(null);
  }

  return (
    <Card title="Sign In">

      <form style={{ fontSize: '18px' }}>

        <div style={{marginBottom:'20px'}}>
          <TextInput name="email" label="Email" type="text" errorMessage={emailError} value={emailValue} onChange={onEmailChange} />
        </div>

        <div style={{marginBottom:'30px'}}>
          <TextInput name="password" label="Password" type="password" errorMessage={passwordError} onChange={onPasswordChange} />
        </div>

        <div style={{marginBottom:'30px'}}>
          {hasError && <Alert severity='error'><AlertTitle>ERROR</AlertTitle>Fail to sign in to your account</Alert>}
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
              Sign In
          </StyledButton>
        </div>

        <div>
          <TextLink onClick={() => props.history.push({ pathname: '/', search: '?c=forgetpassword' })}>Forget password?</TextLink>          
        </div>

        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <hr />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div>
            <span>New ?</span>
          </div>
          <div style={{ marginTop: '16px', marginBottom: '0px' }}>
            <StyledButton 
                type="button"
                style={{ width: '100%', 
                        backgroundColor: '#3C9F40', 
                        color: '#FFFFFF', 
                        fontSize: '16px',
                        padding: '12px',
                        marginBottom: '2px',
                  }}
                onClick={() => props.history.push({ pathname: '/', search: '?c=signup' })}
              >
                Create Account
            </StyledButton>
          </div>
        </div>
      </form>

    </Card>
  )
}

export default withRouter(SignIn);