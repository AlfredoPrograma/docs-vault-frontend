import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/layouts/Auth';
import { DashboardLayout } from '@/layouts/Dashboard';

import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <h1>Home</h1>
  },
  {
    path: routes.AUTH,
    element: <AuthLayout />
  },
  {
    path: routes.DASHBOARD,
    element: <DashboardLayout />
  }
]);
