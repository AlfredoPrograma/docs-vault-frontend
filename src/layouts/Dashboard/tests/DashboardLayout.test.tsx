import { screen, render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { DashboardLayout } from '../DashboardLayout';
import { testIds } from '../constants/testIds';

describe('DashboardLayout', () => {
  it('renders DashboardLayout component', () => {
    // Arrange & Act
    render(<DashboardLayout />);

    const component = screen.getByTestId(testIds.DASHBOARD);

    // Assert
    expect(component).toBeInTheDocument();
  });
});
