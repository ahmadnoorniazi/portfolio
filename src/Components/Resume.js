import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Flex, Box, Text } from 'rebass';
import Cards from './Card';


function WorkDetail(params) {
  return (

    <Flex m={70}>
      <Box width={1 / 3} px={2}>
        <Cards />
      </Box>
      <Box width={1 / 3} px={2}>
        <Cards />

      </Box>
      <Box width={1 / 3} px={2}>
        <Cards />

      </Box>
    </Flex>
  );
}

export default WorkDetail;
