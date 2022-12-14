import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const ShareLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default ShareLayout;
