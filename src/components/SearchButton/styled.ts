import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  border: 3px solid #c4c4c4;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 15px;
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
