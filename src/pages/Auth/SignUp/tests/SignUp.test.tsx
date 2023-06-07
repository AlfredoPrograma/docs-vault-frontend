import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { SignUp } from '../SignUp';
import { testIds } from '../constants/testIds';

describe('SignUp', () => {
  it('renders SignUp page', () => {
    // Arrange & Act
    render(<SignUp />);

    const component = screen.getByTestId(testIds.SIGN_UP);

    // Assert
    expect(component).toBeInTheDocument();
  });
});
