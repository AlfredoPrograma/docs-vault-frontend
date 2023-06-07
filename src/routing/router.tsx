import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/layouts/Auth';
import { DashboardLayout } from '@/layouts/Dashboard';
import { SignIn } from '@/pages/Auth/SignIn';

import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <h1>Home</h1>
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: routes.AUTH.SIGN_IN,
        element: <SignIn />
      }
    ]
  },
  {
    path: routes.DASHBOARD,
    element: <DashboardLayout />
  }
]);
