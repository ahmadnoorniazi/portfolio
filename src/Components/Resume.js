/* eslint-disable */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Flex, Box, Text } from 'rebass';
import Cards from './Card';

function WorkDetail({data, heading, span}) {
  return (
    <Box bg="primary" id="works">
      <Box sx={{textAlign: "center"}} mb={30}>
        <Text color="#FFFFFF" as="h2">Where i've Worked</Text>
      </Box>
    <Flex justifyContent="center" p={['20', '10', 0]} m={[0,0,50]} flexWrap='wrap' flexDirection={['column', 'column', "row"]}>
      {data && data.work && data.work.map(item => (
      <Box width={[1,1,1 / 4]} px={15} my={20}>
      <Cards 
        imagePath={`/images/${item.imageKey}`}
        span={item.company}
        heading={item.title}
        >
        <Text sx={{textAlign: "justify"}} fontFamily="sans-serif" color="#FFFFFF">
         {item.description}
        </Text>
      </Cards>
    </Box>
    ))}
    </Flex>
    </Box>

  );
}

export default WorkDetail;
