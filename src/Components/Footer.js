/* eslint-disable */

import React, { Component } from 'react';
import { Box, Flex, Text, Link } from 'rebass'
import Heading from './Heading';
import SpanText from './SpanText';
import Linkdin from '../icons/linkdin.svg';
import Github from '../icons/github.svg'
import Twitter from '../icons/twitter.svg'

const CircleLink = ({children, link}) => {
  return (
    <Link href={link} mx="10px" width="50px" height="50px" bg="primary" p="13px" sx={{border: '1px solid #fff', borderRadius: "4px", ':hover': {
    background: "#08d665",
    border: '1px solid #08d665'
  }}}>
   {children}
  </Link>
  )
}

const Footer = () => {
  return (
    <Box p={50}>
    <SpanText textAlign={['center', 'center', 'center']} firstText="Let's" secondText="connect" />
    <Box height="1px" width={1} bg="secondary" my={20} />
    <Flex 
      width={1}
      height="100px"
      bg="primary"
      flexWrap="wrap"
      justifyContent="center"
      flexDirection={['row', 'row', 'row']}
    >
    <Box sx={{textAlign: "center"}} width={[1, 1, 1/ 2]}>
    <Text fontWeight="bold" fontSize="20px"  my="20px" letterSpacing="2px" color="secondary" fontFamily="open sans,sans-serif" sx={{textTransform: "uppercase", fontSize:"16px"}}>
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
    <Box sx={{textAlign: "center"}} width={[1, 1, 1/ 2]}>
      <Text fontWeight="bold" fontSize="20px" letterSpacing="2px" my="20px" color="secondary" fontFamily="open sans,sans-serif" sx={{textTransform: "uppercase", fontSize:"16px"}}>
        Follow Me
      </Text>
      <Flex justifyContent="center" >
        <CircleLink link="https://www.linkedin.com/in/ahmadnoorniazi/">
        <Linkdin />
      </CircleLink>
        <CircleLink link="https://twitter.com/AhmadNoor__">
           <Twitter />
        </CircleLink>
        <CircleLink link="https://github.com/ahmadnoorniazi">
          <Github />
        </CircleLink>
      </Flex>
    </Box>
    </Flex>
    </Box>
  );
};

export default Footer;