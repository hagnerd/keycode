import React from 'react';
import { storiesOf } from '@storybook/react';

import PlaceHolder from '../Placeholder';
import Wrapper from '../../utils/storyBookWrapper';

storiesOf('PlaceHolder', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <PlaceHolder text="Press any key" />);
