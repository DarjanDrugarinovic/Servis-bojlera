import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'store';
import { routes } from './routes';

export const PrivateRoutes = () => {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    return <Outlet />;
  }

  return <Navigate replace to={routes.home} />;
};

export default PrivateRoutes;
