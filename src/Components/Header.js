/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { Box as Wrapper, Text } from 'rebass';
import styled from 'styled-components';
import { layout, compose, position } from 'styled-system';
import theme from '../theme';
import SocialLinks from '../layout/SocialLinks';

const Box = styled(Wrapper)`
${compose(layout, position)}`;

const Header = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <Box id="home">
      <Box
        width={['100%', width]}
        bg="primary"
        height={['450px', height]}
        sx={{
          backgroundImage: 'url(/images/back-2.jpeg)',
          position: 'relative',
          textAlign: 'center',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          overflow: 'hidden'
        }}
      >
        <Box left={['10%', '10%', '30%']} width={['90%', '700px']} sx={{ position: 'absolute', top: '20%' }}>
          <Text
            fontFamily="open sans,sans-serif"
            textAlign="initial"
            as="h1"
            color="white"
            lineHeight={['40px', '40px', '90px']}
            fontSize={['40px', '40px', '80px']}
          >
            👋 Hi, I AM
          </Text>
          <Text
            fontFamily="open sans,sans-serif"
            textAlign="initial"
            as="h1"
            color="secondary"
            lineHeight={['40px', '40px', '90px']}
            fontSize={['40px', '40px', '80px']}
          >
            Ahmad Noor
          </Text>
          <Text
            py="10px"
            fontFamily="open sans,sans-serif"
            as="p"
            lineHeight={['20px', '20px', '40px']}
            fontSize={['15px', '15px', '20px']}
            px={15}
            textAlign="initial"
            color="white"
            my={30}
            sx={{ borderLeft: `3px solid ${theme.colors.secondary}` }}
          >
            Highly Motivated Software Engineer Who Specialized in Javascript.
            I help companies and developers to write good quality code to make quality software.
            I love to teach javascript and reactJs

          </Text>
          <SocialLinks />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
