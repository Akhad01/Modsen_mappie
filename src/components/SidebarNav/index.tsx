import { Logoimg, Wrapper } from './styled';
import { logo } from '../../assets/icons';
import Profile from '../Profile';
import { sidebarMenu } from '../../constants/sidebar-menu';
import SidebarNavItem from '../SidebarNavItem';

const SidebarNav = () => {
  return (
    <Wrapper>
      <Logoimg src={logo} />

      {sidebarMenu.map((item, i) => (
        <SidebarNavItem type={item.type} key={i}>
          {item.component}
        </SidebarNavItem>
      ))}
      <Profile />
    </Wrapper>
  );
};

export default SidebarNav;
