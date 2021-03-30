import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  width: 80rem;

  @media (max-width: 400px) {
    padding: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 450px) {
    font-size: 3.5rem;
  }
`;

export const Content = styled.div`
  height: fit-content;
  width: 100%;
  font-size: 1.8rem;
`;

export const NoData = styled.p`
  font-size: 2.5rem;
  padding: 2.5rem;
`;
