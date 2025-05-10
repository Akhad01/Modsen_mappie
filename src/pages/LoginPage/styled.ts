import styled from 'styled-components';
import { backgroundAuth } from '../../assets/background';

export const LoginPageStyle = styled.div`
  height: 100vh;
  background: no-repeat url(${backgroundAuth});
  background-size: cover;

  @media (max-width: 800px) {
    background: none;
  }
`;

