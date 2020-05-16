import React, { useContext } from 'react';
import { Box, Button, Flex } from 'rebass';
import { MyContext } from '../../globalState';
import RenderTabs from '../RenderTabs';
import theme from '../../theme';

const SideBar = () => {
  const { onClickSideBar, isOpenSideBar } = useContext(MyContext);

  return (
    <Box
      sx={{
        height: '100%',
        width: `${isOpenSideBar ? '80%' : '0'}`,
        position: 'fixed',
        'z-index': 2,
        top: 0,
        right: 0,
        backgroundColor: theme.colors.light,
        'overflow-x': 'hidden',
        transition: '1s',
      }}
    >
      <Flex>
        <Button
          variant="primary"
          onClick={() => onClickSideBar(false)}
          sx={{ right: 0, position: 'absolute', top: 10 }}
        >
          Close
        </Button>
      </Flex>
      <Box width={1} my="60px" sx={{ left: 0, position: 'absolute' }}>
        <RenderTabs />
      </Box>
    </Box>

  );
};

export default SideBar;
