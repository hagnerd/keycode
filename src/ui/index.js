import styled from 'react-emotion';

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

export { CardsWrapper, FlexColumn };
