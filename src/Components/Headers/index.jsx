import React from 'react';
import {
  Box, Flex, Image, Text,
} from 'rebass';
import Button from '../Button';
import Interface from '../../icons/interface.svg';

const Header = ({ children }) => (
  <Box sx={{ position: 'sticky', zIndex: 2, top: 0 }}>
    <Flex bg="#000" py={10}>
      <Box
        width={[1 / 6, 1 / 3]}
        color="white"
        pl={10}
        sx={{ textAlign: 'center', margin: 'auto' }}
      >
        <Flex>
          <Box>
            <Text p="5px" letterSpacing={4} color="#c8c6c6" as="h3">Portfolio</Text>
          </Box>
        </Flex>
      </Box>
      <Box
        p={3}
        width={1}
        display={['none', 'block']}
      >
        {children}
      </Box>
      <Box sx={{ left: 0, textAlign: 'end' }} width={[1, 1 / 3]} p="7px">
        <Button display={['none', 'none', 'block']}>
          Download CV
        </Button>
        <Box display={['block', 'block', 'none']}>
          <Interface />
        </Box>

      </Box>
    </Flex>
  </Box>

);

export default Header;
