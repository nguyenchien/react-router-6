import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import StyledNavbar from '../component/StyledNavbar';

const ShareLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default ShareLayout;
