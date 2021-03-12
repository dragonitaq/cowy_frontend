import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

const anchorStyle = css`
  font-size: 2rem;
  margin-right: 2rem;
  text-decoration: none;
  text-transform: uppercase;
`;

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 2.5rem;
  align-items: center;

  & :nth-child(3) {
    margin-left: auto;
  }
`;

export const Logo = styled(CowyLogo)`
  width: 3rem;
`;

export const CompanyName = styled.h1`
  font-size: 5rem;
`;

export const Login = styled(Link)`
  ${anchorStyle}
`;

export const Register = styled(Link)`
  ${anchorStyle}
`;

export const ProfileName = styled.p`
  ${anchorStyle}
  cursor: pointer;
  display: inline-block;
`;
export const Logout = styled.p`
  ${anchorStyle}
  cursor: pointer;
  display: inline-block;
`;
