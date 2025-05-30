import styled from 'styled-components';

export const SignupForm = styled.div`
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

export const SignupText = styled.p`
  margin-top: 16px;
`;
