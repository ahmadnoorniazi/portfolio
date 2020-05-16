/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Box, Flex, Text, Link
} from 'rebass';
import theme from '../../theme';
import Linkdin from '../../icons/linkdin.svg';
import Github from '../../icons/github.svg';
import Twitter from '../../icons/twitter.svg';

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


const SocialIcons = ({ align, ...props }) => (
  <Flex justifyContent="center" {...props}>
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
);

export default SocialIcons;
