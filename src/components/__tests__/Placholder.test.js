import React from 'react';
import { render } from 'react-testing-library';

import PlaceHolder from '../placeholder';

test('should render without crashing', () => {
  render(<PlaceHolder text="Placeholder" />);
});
