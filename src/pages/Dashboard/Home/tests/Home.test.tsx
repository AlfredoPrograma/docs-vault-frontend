import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { Home } from '../Home';
import { testIds } from '../constants/testIds';

describe('Home', () => {
  it('renders Home page', () => {
    // Arrange & Act
    render(<Home />);

    const component = screen.getByTestId(testIds.HOME);

    // Assert
    expect(component).toBeInTheDocument();
  });
});
