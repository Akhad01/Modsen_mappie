import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 25px 35px;
  align-items: center;
`;

export const Logoimg = styled.img`
  height: 33px;
  width: 33px;
  margin-bottom: 40px;
`;

export const SearchButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  border: 3px solid #c4c4c4;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 15px;
  cursor: pointer;
`;

export const BookmarkButton = styled.button`
  width: 60px;
  height: 60px;
  radius: 6px;
  background-color: #c75e5e;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const Profile = styled.div`
  margin-top: auto;
`;
