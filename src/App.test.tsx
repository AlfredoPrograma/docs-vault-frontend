import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import App from '@/App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText(/Hello world/i);
    expect(headline).toBeInTheDocument();
  });
});
