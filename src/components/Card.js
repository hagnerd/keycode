import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CardWrapper = styled('div')`
  border-radius: 10px;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled('div')`
  background-color: #718dd8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #17223d;
  padding: 5px 10px;
`;

const CardBody = styled('div')`
  text-align: center;
  color: #474f64;
`;

const Card = ({ title, value }) => (
  <CardWrapper>
    <CardHeader>
      <h3>{title}</h3>
    </CardHeader>
    <CardBody>
      <h2>{value}</h2>
    </CardBody>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Card.defaultProps = {
  value: '-',
};

export default Card;
