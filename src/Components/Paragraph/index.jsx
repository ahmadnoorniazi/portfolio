/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text } from 'rebass';

const Paragraph = ({ children, ...rest }) => (
  <Text as="p" {...rest}>
    {children}
  </Text>
);

export default Paragraph;
