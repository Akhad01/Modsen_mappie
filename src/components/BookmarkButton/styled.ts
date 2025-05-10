import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 60px;
  radius: 6px;
  background-color: #c75e5e;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 500px) {
    width: 45px;
    height: 45px;
  }
`;
