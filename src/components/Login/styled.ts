import styled from 'styled-components';

export const LoginForm = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const LoginText = styled.p`
  margin-top: 16px;
`;
