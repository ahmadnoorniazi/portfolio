/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text } from 'rebass';

const Heading = ({ children, ...rest }) => (
  <Text {...rest} textAlign="initial" lineHeight={['25px', '25px', '55px']} fontSize={['20px', '20px', '44px']} letterSpacing="-2">
    {children}
  </Text>
);

export default Heading;
