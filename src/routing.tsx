import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthLayout } from './layouts/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/auth',
    element: <AuthLayout />
  }
]);
