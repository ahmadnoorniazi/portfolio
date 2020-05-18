/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text, Box as Wrapper } from 'rebass';
import styled from 'styled-components';
import {
  compose, border
} from 'styled-system';
import theme from '../../theme';

const Box = styled(Wrapper)`
${compose(border)}`;

const BorderText = ({
  children, textAlign, textStyle, ...rest
}) => (
  <Box borderLeft={`3px solid ${theme.colors.secondary}`} {...rest}>
    <Text
      color="white"
      textAlign={textAlign}
      ml="20px"
      as="p"
      fontSize="18px"
      sx={{ 'text-transform': 'capitalize' }}
      fontWeight={400}
      {...textStyle}
    >
      {children}
    </Text>
  </Box>
);

export default BorderText;
