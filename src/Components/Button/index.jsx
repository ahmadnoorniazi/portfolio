/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button } from 'rebass';
import theme from '../../theme';

const BaseButton = ({
  children, ...rest
}) => (
  <Button
    variant="primary"
    sx={{
      ':hover': {
        background: theme.colors.primary,
        border: `1px solid ${theme.colors.secondary}`,
        color: theme.colors.secondary
      }
    }}
    fontSize={18}
    {...rest}
  >
    {children}
  </Button>
);

export default BaseButton;
