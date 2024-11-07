import { render, screen } from '@testing-library/react';

import { Button } from './Button';

beforeEach(() => {
  render(<Button />);
});

test('render Button', () => {
  const button = screen.getByTestId('button');

  expect(button).toBeInTheDocument();
});
