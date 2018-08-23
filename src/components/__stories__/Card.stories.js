import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../Card';
import Wrapper from '../../utils/storyBookWrapper';

const info = {
  title: 'event.keyCode',
  value: '71',
};

storiesOf('Card', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <Card {...info} />)
  .add('withoutValue', () => <Card title="event.keyCode" />);
