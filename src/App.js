import React from 'react';
import styled, { keyframes } from 'react-emotion';
import { injectGlobal } from 'emotion';

import Card from './components/Card';
import Display from './components/Display';
import KeyListener from './containers/KeyListener';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  body, html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Josefin Sans', sans-serif;
  }
`;

const CardsWrapper = styled('div')`
  display: flex;
  justify-content: space-around;
`;

const FlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

const PlaceHolder = styled('h1')`
  text-align: center;
  animation: ${pulse} 3s infinite;
`;

const App = () => (
  <KeyListener>
    {({ code, key, which, keyCode }) => {
      if (keyCode === '-') {
        return (
          <FlexColumn>
            <PlaceHolder>Press Any Key</PlaceHolder>
          </FlexColumn>
        );
      }
      return (
        <FlexColumn>
          <Display keyCode={keyCode} />
          <CardsWrapper>
            <Card title="event.code" value={code} />
            <Card title="event.key" value={key} />
            <Card title="event.which" value={which} />
          </CardsWrapper>
        </FlexColumn>
      );
    }}
  </KeyListener>
);

export default App;
