import React from 'react';
import { Flex, Link } from 'rebass';
import Linkdin from '../../icons/linkdin.svg';
import Github from '../../icons/github.svg';
import Twitter from '../../icons/twitter.svg';

const CircleLink = ({ children, link }) => (
  <Link
    href={link}
    mx="10px"
    width="50px"
    height="50px"
    bg="primary"
    p="13px"
    sx={{
      border: '1px solid #fff',
      borderRadius: '4px',
      ':hover': {
        background: '#08d665',
        border: '1px solid #08d665'
      }
    }}
  >
    {children}
  </Link>
);

const SocialLinks = () => (
  <Flex justifyContent="initial">
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

export default SocialLinks;
