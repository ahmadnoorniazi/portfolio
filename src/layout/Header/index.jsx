import React, { useContext } from 'react';
import {
  Box, Flex as Main, Text, Button as Wrapper
} from 'rebass';
import {
  compose, border,
} from 'styled-system';
import styled from 'styled-components';
import Interface from '../../icons/interface.svg';
import { MyContext } from '../../globalState';
import Button from '../IconButton';
import withTheme from '../../utils/themeHoc';
import Header from '../../Components/Headers';

const Flex = styled(Main)`
${compose(border)}`;

const HeaderBar = ({ children, theme }) => {
  const { isOpenSideBar, onClickSideBar, } = useContext(MyContext);
  const borderBottom = `2px solid ${theme.colors.secondary}`;
  return (
    <Header
      borderBottom={[borderBottom, borderBottom, 'none']}
    >
      <Flex width={1}>
        <Box
          width={[1, 1 / 4]}
          color="white"
          pl={10}
          sx={{ textAlign: 'center', margin: 'auto' }}
        >
          <Box>
            <Text textAlign="initial" p="5px" letterSpacing={4} color="#c8c6c6" as="h3">Ahmad Noor</Text>
          </Box>
        </Box>
        <Box
          width={1}
          display={['none', 'block']}
        >
          {children}
        </Box>
        <Box sx={{ left: 0, textAlign: 'end' }} width={[1, 1, 1 / 4]} p="7px" m="auto">
          <Button display={['none', 'none', 'flex']}>
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
    </Header>

  );
};

export default withTheme(HeaderBar);
