import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

export const ForgotPasswordFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem;
`;

export const ForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;

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
  font-size: 1.8rem;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.primary};
  margin-top: 1rem;
`;

export const ForgotPasswordButton = styled.button`
  min-width: 10rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.primary};
  margin-top: 1rem;
`;

export const SubmittedMsg = styled.p`
  font-size: 1.5rem;
  display: inline-block;
  text-align: center;
  margin-top: 2.5rem;
`;

export const Back = styled(Link)`
  font-size: 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  padding: 0.5rem 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
