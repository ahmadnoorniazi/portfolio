/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Heading from '../Heading';

const SpanText = ({ firstText, secondText, ...rest }) => (
  <Heading {...rest} color="white" as="h1" sx={{ textTransform: 'uppercase' }} fontFamily="open sans,sans-serif">
    {firstText}
    <Heading ml={2} as="span" color="secondary" sx={{ textTransform: 'uppercase' }} fontFamily="open sans,sans-serif">
      {secondText}
    </Heading>
  </Heading>
);

export default SpanText;
