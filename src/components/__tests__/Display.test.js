import React from 'react';
import { render } from 'react-testing-library';

import Display from '../Display';

test('should render without crashing', () => {
  render(<Display keyCode="70" />);
});

test('should render the keyCode', () => {
  const { getByText } = render(<Display keyCode="71" />);
  const keyCode = getByText(/71/);
  expect(keyCode).toBeTruthy();
});
