import React from 'react';
import { storiesOf } from '@storybook/react';

import PlaceHolder from '../placeholder';
import Wrapper from '../../utils/storyBookWrapper';

storiesOf('PlaceHolder', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <PlaceHolder text="Press any key" />);
