import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const UserPages = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default UserPages;
