import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { SignIn } from '../SignIn';
import { testIds } from '../constants/testIds';

describe('SignIn', () => {
  it('renders SignIn page', () => {
    // Arrange & Act
    render(<SignIn />);

    const component = screen.getByTestId(testIds.SIGN_IN);

    // Assert
    expect(component).toBeInTheDocument();
  });
});
