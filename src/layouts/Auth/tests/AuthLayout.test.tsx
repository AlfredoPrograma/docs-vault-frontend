import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { AuthLayout } from '../AuthLayout';
import { testIds } from '../constants/testIds';

describe('AuthLayout', () => {
  it('renders AuthLayout component', () => {
    // Arrange & Act
    render(<AuthLayout />);

    const component = screen.getByTestId(testIds.AUTH_LAYOUT);

    // Assert
    expect(component).toBeInTheDocument();
  });
});
