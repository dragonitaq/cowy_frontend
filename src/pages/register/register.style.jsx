import styled from 'styled-components';
import { ReactComponent as CowyLogo } from '../../assets/logo.svg';

export const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
`;

export const RegisterForm = styled.form`
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

export const NameInput = styled.input`
  min-width: 20rem;
`;

export const EmailInput = styled.input`
  min-width: 20rem;
`;

export const PasswordInput = styled.input`
  min-width: 20rem;
`;

export const ConfirmPasswordInput = styled.input`
  min-width: 20rem;
`;

export const RegisterButton = styled.button`
  min-width: 10rem;
`;
