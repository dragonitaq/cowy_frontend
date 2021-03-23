import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const Input = styled.input`
  min-width: 20rem;
  font-size: 1.8rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.primary};
`;

export const LoginButton = styled.button`
  font-size: 1.5rem;
  min-width: 10rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.primary};
`;

export const ForgotPassword = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
  &:visited {
    color: ${({ theme }) => theme.text};
  }
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
