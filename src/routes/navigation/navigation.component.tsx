import { Outlet } from 'react-router-dom';
import { LogoContainer, NavigationContainer, NavLink, NavLinks }
  from './navigation.styles.tsx';

const Navigation = () => (
  <>
    <NavigationContainer>
      <LogoContainer to='/'>
        Logo
      </LogoContainer>

      <NavLinks>
        <NavLink to='/about'>About</NavLink>
      </NavLinks>
    </NavigationContainer>

    <Outlet />
  </>
);

export default Navigation;
