import React from 'react';
import { render } from 'react-testing-library';

import Card from '../card';

const propFac = props => ({
  title: 'event.keyCode',
  value: '71',
  ...props,
});

const defaultProps = propFac();

test('should render Card without crashing', () => {
  render(<Card {...defaultProps} />);
});

test('should render the title correctly', () => {
  // Assemble
  const props = propFac({ title: 'test title' });
  const { getByText } = render(<Card {...props} />);

  // Act
  const title = getByText(/test title/);

  // Assert
  expect(title).toBeTruthy();
});

test('should render the value correctly', () => {
  // Assemble
  const props = propFac({ value: 72 });
  const { getByText } = render(<Card {...props} />);

  // Act
  const value = getByText(/72/);

  // Assert
  expect(value).toBeTruthy();
});
