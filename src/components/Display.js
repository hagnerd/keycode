import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const KeyCode = styled('h1')`
  color: #249c69;
  font-size: 15rem;
  text-align: center;
  margin: 0;
`;

const Display = ({ keyCode }) => <KeyCode>{keyCode}</KeyCode>;

Display.propTypes = {
  keyCode: PropTypes.string.isRequired,
};

export default Display;
