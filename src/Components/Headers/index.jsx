import React, { useContext } from 'react';
import {
  Box, Flex, Text, Button as Wrapper
} from 'rebass';
import Button from '../Button';
import Interface from '../../icons/interface.svg';
import { MyContext } from '../../globalState';

const Header = ({ children }) => {
  const { isOpenSideBar, onClickSideBar } = useContext(MyContext);
  return (
    <Box sx={{ position: 'sticky', zIndex: 2, top: 0 }}>
      <Flex bg="#000">
        <Box
          width={[1 / 6, 1 / 3]}
          color="white"
          pl={10}
          sx={{ textAlign: 'center', margin: 'auto' }}
        >
          <Box>
            <Text textAlign="initial" p="5px" letterSpacing={4} color="#c8c6c6" as="h3">Portfolio</Text>
          </Box>
        </Box>
        <Box
          p={2}
          width={1}
          display={['none', 'block']}
        >
          {children}
        </Box>
        <Box sx={{ left: 0, textAlign: 'end' }} width={[1, 1, 1 / 4]} p="7px" m="auto">
          <Button display={['none', 'none', 'block']}>
            Download CV
          </Button>
          <Box display={['block', 'block', 'none']}>
            <Wrapper
              variant="outline"
              onClick={() => onClickSideBar(!isOpenSideBar)}
            >
              <Interface />
            </Wrapper>
          </Box>

        </Box>
      </Flex>
    </Box>

  );
};

export default Header;
