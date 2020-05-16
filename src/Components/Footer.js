
import React, { Component } from 'react';
import {
  Box, Flex, Text, Link
} from 'rebass';
import Heading from './Heading';
import SpanText from './SpanText';
import theme from '../theme';
import SocialIcons from './Socialcons';

const {
  secondary, white, footerText, footerBack, backgroundColor
} = theme.colors;

const CircleLink = ({ children, link }) => (
  <Link
    href={link}
    mx="10px"
    width="50px"
    height="50px"
    bg="footerBack"
    p="13px"
    sx={{
      border: `1px solid ${footerText}`,
      borderRadius: '4px',
      ':hover': {
        background: secondary,
        border: `1px solid ${secondary}`
      }
    }}
  >
    {children}
  </Link>
);

const Footer = (props) => {
  console.log('props', props);
  return (
    <Box
      sx={{
        background: backgroundColor
      }}
      height="100%"
      p={50}
      id="contact"
    >
      <SpanText textAlign={['center', 'center', 'center']} firstText="Let's" secondText="connect" scolor={footerText} />
      <Box height="1px" width={1} bg="secondary" my={20} />
      <Flex
        width={1}
        height="100%"
        flexWrap="wrap"
        justifyContent="center"
        flexDirection={['row', 'row', 'row']}
      >
        <Box sx={{ textAlign: 'center' }} width={[1, 1, 1 / 2]}>
          <Text
            fontWeight="bold"
            fontSize="20px"
            my="20px"
            letterSpacing="2px"
            color="footerText"
            fontFamily="open sans,sans-serif"
            sx={{ textTransform: 'uppercase', fontSize: '16px' }}
          >
            Get In Touch
          </Text>
          <Text
            my="15px"
            letterSpacing="2px"
            color="footerText"
            fontFamily="literata,serif"
            sx={{ fontSize: '16px' }}
          >
            ahmadnoor95m@gmail.com
          </Text>
          <Text
            my="15px"
            letterSpacing="2px"
            color="footerText"
            fontFamily="literata,serif"
            sx={{ fontSize: '16px' }}
          >
            +92-304-4538857
          </Text>
          <Text
            my="15px"
            letterSpacing="2px"
            color="footerText"
            fontFamily="literata,serif"
            sx={{ fontSize: '16px' }}
          >
            Lahore, Pakistan
          </Text>
        </Box>
        <Box sx={{ textAlign: 'center' }} width={[1, 1, 1 / 2]}>
          <Text
            fontWeight="bold"
            fontSize="20px"
            letterSpacing="2px"
            my="20px"
            color="footerText"
            fontFamily="open sans,sans-serif"
            sx={{ textTransform: 'uppercase', fontSize: '16px' }}
          >
            Follow Me
          </Text>
          <SocialIcons />
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
