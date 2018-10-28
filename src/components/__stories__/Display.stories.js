import React from 'react';
import { storiesOf } from '@storybook/react';

import Display from '../display';
import Wrapper from '../../utils/storyBookWrapper';

storiesOf('Display', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <Display keyCode="71" />);
