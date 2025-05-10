import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 17px 0 17px;
  border-left: 3px solid #eeeeee;
  position: absolute;
  z-index: 99;
  width: min(350px, 100vw - 100% - 48px);
  max-width: calc(100vw - 100% - 48px);
  background-color: #ffffff;
  height: 100vh;
  left: 100%;

  @media (max-width: 700px) {
    width: min(300px, 100vw - 100% - 48px);
  }
`;
