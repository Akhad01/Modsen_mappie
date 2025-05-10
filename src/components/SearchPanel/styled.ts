import { InputBase, Paper } from "@mui/material";
import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchPaper = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  @media (max-width: 700px) {
    height: 50px;
  }
`;

export const SearchInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`;

export const SuggestionsPaper = styled(Paper)`
  position: absolute;
  top: 62px;
  left: 0;
  right: 0;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;
