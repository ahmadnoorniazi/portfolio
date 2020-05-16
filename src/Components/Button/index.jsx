/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Box } from 'rebass';
import Chevron from '../../icons/chevronRight.svg';

const BaseButton = ({
  children, ...rest
}) => (
  <Button
    p="2"
    variant="primary"
    py="13px"
    pl="25px"
    sx={{
      lineHeight: '27px',
      textTransform: 'uppercase',
      borderRadius: 4,
      display: 'flex !important',
    }}
    fontSize={18}
    {...rest}
  >
    {children}
    <Box bg="#fff" px="2" mx="3" sx={{ borderRadius: 4 }}>
      <Chevron />
    </Box>
  </Button>


);

export default BaseButton;
