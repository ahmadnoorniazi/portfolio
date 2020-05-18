/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from 'rebass';
import Button from '../../Components/Button';
import Chevron from '../../icons/chevronRight.svg';

const IconButton = ({ children, ...rest }) => (
  <Button {...rest}>
    {children}
    <Box bg="white" p={1} mx="3" sx={{ borderRadius: 4 }} display="flex">
      <Chevron />
    </Box>
  </Button>
);

export default IconButton;
