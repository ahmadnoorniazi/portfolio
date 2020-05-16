import React, { useContext } from 'react';
import {
  Box as Div, Flex, Text, Button as Wrapper
} from 'rebass';
import styled from 'styled-components';
import { border, compose } from 'styled-system';
import Button from '../Button';
import Interface from '../../icons/interface.svg';
import { MyContext } from '../../globalState';

const Box = styled(Div)`
${compose(border)}`;

const Header = ({ children }) => {
  const {
    isOpenSideBar, onClickSideBar, theme,
  } = useContext(MyContext);
  return (
    <Box
      sx={{ position: 'sticky', zIndex: 2, top: 0 }}
      borderBottom={[`2px solid ${theme.colors.secondary}`, `2px solid ${theme.colors.secondary}`, 'none']}
    >
      <Flex sx={{
        background: theme.colors.backgroundColor
      }}
      >
        <Box
          width={[1 / 6, 1 / 3]}
          color="white"
          pl={10}
          sx={{ textAlign: 'center', margin: 'auto' }}
        >
          <Box>
            <Text textAlign="initial" p="5px" letterSpacing={4} color="headerText" as="h3">Ahmad Noor</Text>
          </Box>
        </Box>
        <Box
          width={1}
          display={['none', 'block']}
        >
          {children}
        </Box>
        <Box sx={{ left: 0, textAlign: 'end' }} width={[1, 1, 1 / 4]} p="7px" m="auto">
          <Button display={['none !important', 'none !important', 'flex !important']}>
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
