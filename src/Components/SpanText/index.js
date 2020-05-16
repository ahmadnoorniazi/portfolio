/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Heading from '../Heading';

const SpanText = ({
  firstText, secondText, fcolor, scolor, ...rest
}) => (
  <Heading {...rest} color={fcolor || 'headingColor'} as="h1" sx={{ textTransform: 'uppercase' }} fontFamily="open sans,sans-serif">
    {firstText}
    <Heading ml={2} as="span" color={scolor || 'secondary'} sx={{ textTransform: 'uppercase' }} fontFamily="open sans,sans-serif">
      {secondText}
    </Heading>
  </Heading>
);

export default SpanText;
