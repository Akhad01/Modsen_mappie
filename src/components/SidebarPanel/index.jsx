import { Container } from './styled';

const SidebarPanel = ({ children }) => {
  return <Container>{children()}</Container>;
};

export default SidebarPanel;
