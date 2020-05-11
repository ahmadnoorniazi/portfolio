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
import Canvas from './Canvas';
import Description from './Description';

function WorkDetail({data, heading, span}) {
  return (
    <Box sx={{ 
      backgroundImage: 'url(/images/project-bg.jpg)',  
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden'}} 
      id="experience" 
      pt="50px" 
      px={[10, 10, 130]}
    >
      <Description description="Where i have worked" primarText="My Experience &" secondaryText="Work History" smallText="My Experience"  />
    <Flex justifyContent="start" p={['10', '10', 0]}  flexWrap='wrap' flexDirection={['column', 'column', "row"]}>
    {data && data.work && data.work.map(item => (
      <Box width={[1,1, data.work.length <= 3 ? 1 / 3 : 1 / 4]} px={15} my={20}>
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
    <Flex width={1} flexWrap='wrap' justifyContent="space-between" px={15} flexDirection={['column', 'column', "row"]} my={40}>
    {
      data.platforms.map(val => (
        <Box width={[1,1, 1 / 4]} sx={{textAlign: "-webkit-center"}}>
          <Canvas percentage={val.level} />
          <Paragraph fontSize="24px" fontWeight={600} my={15} color="white">
            {val.name}
          </Paragraph>
        </Box>
      ))
    }
    </Flex>
    </Box>

  );
}

export default WorkDetail;
