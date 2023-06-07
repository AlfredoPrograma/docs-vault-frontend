import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from './layouts/Auth';
import { DashboardLayout } from './layouts/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/auth',
    element: <AuthLayout />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />
  }
]);
