import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import DevicePage from './pages/DevicePage';
import Shop from './pages/Shop';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';

const authRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: BASKET_ROUTE, Component: Basket },
];

const publicRoutes = [
  { path: SHOP_ROUTE, Component: Shop },
  { path: LOGIN_ROUTE, Component: Auth },
  { path: REGISTRATION_ROUTE, Component: Auth },
  { path: DEVICE_ROUTE + '/:id', Component: DevicePage },
];

export {
  authRoutes,
  publicRoutes
}