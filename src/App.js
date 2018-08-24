import React from 'react';
import { injectGlobal } from 'emotion';

import Card from './components/Card';
import Display from './components/Display';
import PlaceHolder from './components/PlaceHolder';
import KeyListener from './containers/KeyListener';
import { CardsWrapper, FlexColumn } from './ui';

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

const App = () => (
  <KeyListener>
    {({ code, key, which, keyCode }) => {
      if (keyCode === '-') {
        return (
          <FlexColumn>
            <PlaceHolder>Press any key</PlaceHolder>
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
