import SidebarSearch from './SidebarBookmark';
// import SidebarBookmark from './SidebarSearch';
import { Container } from './styled';

const SidebarPanel = () => {
  return (
    <Container>
      <SidebarSearch />
      {/* <SidebarBookmark /> */}
    </Container>
  );
};

export default SidebarPanel;
