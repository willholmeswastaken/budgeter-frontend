import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '.';

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('contains the header text', () => {
    const headingText = screen.getByText('Budgeter');
    expect(headingText).toBeInTheDocument();
  });

  describe('sidebar logic', () => {
    it('contains dropmenu button', () => {
      const headingText = screen.getByRole('button');
      expect(headingText).toBeInTheDocument();
    });
  });
});
