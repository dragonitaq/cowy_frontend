import styled from 'styled-components';

export const Container = styled.div`
  border: solid 2.5px ${({ theme }) => theme.backgroundSecondary};
  border-radius: 15px;
  padding: 1.5rem;
  height: 30rem;
  position: relative;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 900;
`;

export const Content = styled.div`
  font-size: 1.6rem;
  overflow: hidden;
  max-height: 65%;
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
  position: absolute;
  right: 10px;
  bottom: 10px;
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
  position: absolute;
  right: 110px;
  bottom: 10px;
`;
