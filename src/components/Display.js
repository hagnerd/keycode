import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const KeyCode = styled('h1')`
  color: #249c69;
  font-size: 6rem;
`;

const Display = ({ keyCode }) => <KeyCode>{keyCode}</KeyCode>;

Display.propTypes = {
  keyCode: PropTypes.string,
};

Display.defaultProps = {
  keyCode: 'Press a key',
};

export default Display;