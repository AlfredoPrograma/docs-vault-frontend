import { Outlet } from 'react-router-dom';

import { testIds } from './constants/testIds';

export function AuthLayout() {
  return (
    <section data-testid={testIds.AUTH_LAYOUT}>
      <Outlet />
    </section>
  );
}
