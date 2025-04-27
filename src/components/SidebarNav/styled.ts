import { Avatar } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 35px;
  align-items: center;
`;

export const Logoimg = styled.img`
  height: 33px;
  width: 33px;
  margin-bottom: 40px;
`;

export const UserAvatar = styled(Avatar)`
  margin-top: auto; 
  cursor: pointer;
`
