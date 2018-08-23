import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'react-emotion';
import Card from '../Card';

const Wrapper = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const info = {
  title: 'event.keyCode',
  value: '71',
};

storiesOf('Card', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <Card {...info} />)
  .add('withoutValue', () => <Card title="event.keyCode" />);
