import React from 'react';
import styled, { keyframes } from 'react-emotion';

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

const PulseH1 = styled('h1')`
  text-align: center;
  animation: ${pulse} 3s infinite;
`;

const PlaceHolder = ({ text }) => <PulseH1>{text}</PulseH1>;

export default PlaceHolder;
