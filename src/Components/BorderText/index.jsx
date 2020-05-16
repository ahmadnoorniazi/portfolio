import React from 'react';
import { Text, Box as Wrapper } from 'rebass';
import styled from 'styled-components';
import {
  compose, border
} from 'styled-system';
import theme from '../../theme';

const Box = styled(Wrapper)`
${compose(border)}`;

const BorderText = ({ children, textAlign }) => (
  <Box borderLeft={`3px solid ${theme.colors.secondary}`}>
    <Text
      color="red"
      textAlign={textAlign}
      ml="20px"
      as="p"
      fontSize="18px"
      sx={{ 'text-transform': 'capitalize' }}
      fontWeight={400}
    >
      {children}
    </Text>
  </Box>
);

export default BorderText;
