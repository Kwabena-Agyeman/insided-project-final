import React from 'react';
import Nav from '../components/Nav';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Nav component', () => {
  beforeEach(() => {
    render(<Nav />);
  });

  test('Should render Project Author', () => {
    expect(screen.getByText(/project by kwabena agyeman/i)).toBeVisible();
  });

  test('Should render logo', () => {
    expect(screen.getByRole('img', { name: /inSided Logo/i })).toBeVisible();
  });
});
