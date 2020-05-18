/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text } from 'rebass';

const Heading = ({ children, ...rest }) => (
  <Text
    letterSpacing="-2"
    as="h1"
    {...rest}
  >
    {children}
  </Text>
);

export default Heading;
