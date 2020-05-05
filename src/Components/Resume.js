/* eslint-disable */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Flex, Box, Text } from 'rebass';
import Cards from './Card';
import SpanText from './SpanText';
import BorderText from './BorderText';
import Paragraph from './Paragraph';

function WorkDetail({data, heading, span}) {
  return (
    <Box bg="primary" id="works" pt={50} px={[10, 10, 50]}>
    <Flex justifyContent="space-between" p={['10', '10', 0]} m={[0,0,50]} flexWrap='wrap' flexDirection={['column', 'column', "row"]}>
      <Flex px={15} sx={{textAlign: "center"}} mb={30} flexDirection={['column', 'column', "row"]}>
        <Box width={[1,1, 1 / 2]} my={20}>
          <Paragraph fontFamily="sans-serif" sx={{ textTransform: 'uppercase' }} fontSize="16px" lineHeight="16px" color="secondary" fontWeight={800} textAlign={['center', 'center', 'initial']}>
            My Experience
          </Paragraph>
          <SpanText textAlign={["center", 'center', 'initial']} firstText="Experience and" secondText="skill" />
        </Box>
          <Box width={[1, 1, 1 / 2]} my={20} px="15px">
            <BorderText  textAlign={["justify", 'justify', 'initial']}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit,
            Error Qui Enim Sit Ex Provident
            </BorderText>
          </Box>
      </Flex> 
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
