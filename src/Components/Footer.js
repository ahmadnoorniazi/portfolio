/* eslint-disable */

import React, { Component } from 'react';
import { Box, Flex, Text } from 'rebass'
import Heading from './Heading';

const Footer = () => {
  return (
    <Flex 
    width={1}
    height="200px"
    bg="primary"
    flexWrap="wrap"
    justifyContent="center"
    p={50}
    flexDirection={['row', 'row', 'column']}
    >
    <Box sx={{textAlign: "center"}} width={[1, 1, 1/ 3]}>
      <Text my="15px" letterSpacing="2px" color="gray" fontFamily="open sans,sans-serif" sx={{textTransform: "uppercase", fontSize:"16px"}}>
      Location
      </Text>
    </Box>
    <Box sx={{textAlign: "center"}} width={[1, 1, 1/ 3]}>
    <Text  my="20px" letterSpacing="2px" color="gray" fontFamily="open sans,sans-serif" sx={{textTransform: "uppercase", fontSize:"16px"}}>
      Get In Touch
    </Text>
      <Text  my="15px" letterSpacing="2px" color="white"  fontFamily="literata,serif" sx={{fontSize:"16px"}}>
        ahmadnoor95m@gmail.com
      </Text>
      <Text  my="15px" letterSpacing="2px" color="white" fontFamily="literata,serif" sx={{fontSize:"16px"}}>
       +92-304-4538857
      </Text>
      <Text  my="15px" letterSpacing="2px" color="white" fontFamily="literata,serif" sx={{fontSize:"16px"}}>
     Lahore, Pakistan
      </Text>
    </Box>
    <Box sx={{textAlign: "center"}} width={[1, 1, 1/ 3]}>
      <Text letterSpacing="2px" color="gray" fontFamily="open sans,sans-serif" sx={{textTransform: "uppercase", fontSize:"16px"}}>
        Follow Me
      </Text>
  </Box>
      
    </Flex>
  );
};

export default Footer;