import React from 'react';
import Commit from '../components/Commit';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const prop = {
  sha: 'adc2e61ca98f21e09f401485032439f01d858519',
  commit: {
    author: {
      name: 'Kwabena Agyeman',
      email: 'kagyeman@ymail.com',
      date: '2022-01-06T11:35:23Z',
    },

    message: 'set up context',
    url: 'https://api.github.com/repos/Kwabena-Agyeman/nextJS-coffee-stores/git/commits/adc2e61ca98f21e09f401485032439f01d858519',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  html_url:
    'https://github.com/Kwabena-Agyeman/nextJS-coffee-stores/commit/adc2e61ca98f21e09f401485032439f01d858519',
};

describe('Commit component', () => {
  beforeEach(() => {
    render(<Commit data={prop} index={0} length={1} />);
  });

  test('Should render Commit message', () => {
    expect(screen.getByText(/1\. set up context/i)).toBeVisible();
  });
  test('Should render Commit time and author', () => {
    expect(
      screen.getByText(/thu, 06 jan 2022 11:35:23 gmt by kwabena agyeman/i)
    ).toBeVisible();
  });

  test('Should render View commit button', () => {
    expect(screen.getByRole('button', { name: 'View commit' })).toBeVisible();
  });
});
