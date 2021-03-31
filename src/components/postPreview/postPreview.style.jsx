import styled from 'styled-components';

export const Container = styled.div`
  border: solid 2.5px ${({ theme }) => theme.backgroundSecondary};
  border-radius: 15px;
  padding: 1.5rem;
  height: fit-content;
  width: fit-content;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 900;
`;

export const Author = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const Content = styled.div`
  font-size: 1.8rem;
  overflow: hidden;
  height: 20rem;
  width: 30rem;

  @media (max-width: 725px) {
    width: 27rem;
  }
  @media (max-width: 575px) {
    width: 50rem;
    height: 19rem;
  }
  @media (max-width: 500px) {
    width: 40rem;
  }
  @media (max-width: 450px) {
    width: 30rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.75rem;
`;

export const ButtonRead = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 15px;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

export const ButtonEdit = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: solid 1.5px ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 15px;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
