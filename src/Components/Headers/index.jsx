/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Flex as Main
} from 'rebass';
import {
  compose, border, layout, position
} from 'styled-system';
import styled from 'styled-components';

const Flex = styled(Main)`
${compose(layout, border, position)}`;

const Header = ({ children, ...rest }) => (
  <Flex
    width={1}
    bg="primary"
    color="white"
    position="fixed"
    sx={{
      zIndex: 2, top: 0, left: 0, right: 0
    }}
    {...rest}
  >
    {children}
  </Flex>

);

export default Header;
