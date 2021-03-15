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

  & div:nth-child(3) {
    margin-left: auto;
  }
`;

export const Logo = styled(CowyLogo)`
  width: 3rem;
  cursor: pointer;
`;

export const CompanyName = styled.h1`
  font-size: 5rem;
  cursor: pointer;
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
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 20ch;
  position: relative;
`;
export const Logout = styled.p`
  ${anchorStyle}
  cursor: pointer;
  display: inline-block;
`;
