import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 0.5rem 2.5rem;
  align-items: center;

  @media (max-width: 450px) {
    padding: 0.5rem 1.5rem;
  }
  & div:nth-child(3) {
    margin-left: auto;
  }
`;

export const Logo = styled(CowyLogo)`
  width: 3rem;
  cursor: pointer;
  @media (max-width: 400px) {
  width: 2rem;
  }
`;

export const CompanyName = styled.h1`
  font-size: 5rem;
  cursor: pointer;
  @media (max-width: 450px) {
    font-size: 3.5rem;
  }
  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

export const Anchor = styled(Link)`
  font-size: 2rem;
  margin-right: 4rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};

  &:visited {
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 550px) {
    margin-right: 2rem;
    font-size: 1.6rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  @media (max-width: 350px) {
    font-size: 1.5rem;
    margin-right: 0.7rem;
  }
`;
