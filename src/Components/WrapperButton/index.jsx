/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button as Base } from 'rebass';
import {
  typography, space, color, compose, border
} from 'styled-system';
import styled from 'styled-components';

const Button = styled(Base)`
${compose(typography, space, color, border)}`;

const BaseButton = ({
  children, ...rest
}) => (
  <Button
    p={3}
    display="flex"
    fontWeight="bold"
    fontSize={1}
    borderRadius={4}
    sx={{
      lineHeight: '27px',
      textTransform: 'uppercase',
    }}
    {...rest}
  >
    {children}
  </Button>
);

export default BaseButton;
