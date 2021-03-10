import styled, { css } from 'styled-components';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

const anchorStyle = css`
  font-size: 2rem;
  margin-right: 2rem;
  text-decoration: none;
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

export const Login = styled.a`
  ${anchorStyle}
`;

export const Register = styled.a`
  ${anchorStyle}
`;
