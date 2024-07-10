import React from 'react';
import { ReactNode } from 'react';

import { Container } from './styled';

interface Props {
  children: ReactNode;
}

const SidebarPanel = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default SidebarPanel;
