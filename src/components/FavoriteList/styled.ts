import { Paper, Skeleton } from "@mui/material";
import styled from "styled-components";

export const ListWrapper = styled.div`
    overflow-y: auto;
    scroll-behavior: smooth;
    height: 90vh;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
        border: 2px solid #f1f1f1;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`

export const SkeletonItem = styled(Paper).attrs({
    elevation: 2
})`
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 500px) {
        padding: 14px;
    }
`

export const SkeletonTextLarge = styled(Skeleton).attrs({
  variant: 'text',
  width: 140,
  height: 25
})`
    margin-bottom: 20px !important;

    @media (max-width: 500px) {
        margin-bottom: 14px !important;
    }
`;

export const SkeletonTextSmall = styled(Skeleton).attrs({
  variant: 'text',
  width: 100,
  height: 20
})`
  margin-bottom: 20px;
`;

export const SkeletonCircle = styled(Skeleton).attrs({
  variant: 'circular',
  width: 24,
  height: 24
})`
  align-self: flex-end;
  margin-top: 20px;
`;