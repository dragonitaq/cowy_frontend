import styled from 'styled-components';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

export const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: fit-content;
  padding: 2rem;

  & > * {
    margin-bottom: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled(CowyLogo)`
  width: 3rem;
`;
export const CompanyName = styled.h1`
  font-size: 5rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
`;

export const EmailInput = styled.input`
  min-width: 20rem;
`;

export const PasswordInput = styled.input`
  min-width: 20rem;
`;

export const LoginButton = styled.button`
  min-width: 10rem;
`;

export const ForgotPassword = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
`;
