import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/layouts/Auth';
import { DashboardLayout } from '@/layouts/Dashboard';

import { SignIn } from '@/pages/Auth/SignIn';
import { SignUp } from '@/pages/Auth/SignUp';

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
      },
      {
        path: routes.AUTH.SIGN_UP,
        element: <SignUp />
      }
    ]
  },
  {
    path: routes.DASHBOARD,
    element: <DashboardLayout />
  }
]);
