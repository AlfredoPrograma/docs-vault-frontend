import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, DashboardLayout } from '@/layouts';

import { SignIn, SignUp } from '@/pages/Auth';
import { Home } from '@/pages/Dashboard';

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
    element: <DashboardLayout />,
    children: [
      {
        path: routes.DASHBOARD.HOME,
        element: <Home />
      }
    ]
  }
]);
