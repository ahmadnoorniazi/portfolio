import React from 'react';
import {
  Box as Main, Flex as Wrapper, Image, Text
} from 'rebass';
import styled from 'styled-components';
import {
  layout, compose, position, typography
} from 'styled-system';
import Button from '../layout/IconButton';
import SpanText from './SpanText';
import Description from './Description';

const Flex = styled(Wrapper)`
${compose(layout, position)}`;

const Box = styled(Main)`
${compose(typography)}`;

const About = ({ data }) => (
  <>
    <Box sx={{ textAlign: 'center' }}>
      <Description smallAlign={['center']} spanAlign={['center']} primarText="About" secondaryText="Me" smallText="About Me" />
    </Box>
    <Flex
      id="about"
      width={1}
      height={['auto', 'auto', '500px']}
      justifyContent="center"
      sx={{
        position: 'relative',
      }}
      bg="primary"
    >

      <Flex
        position={['inherit', 'inherit', 'absolute']}
        left={[0, '5%', '20%']}
        top={['0', '0', '25%']}
        bottom={['10%', '10%', '25%']}
        flexDirection={['column', 'column', 'row']}
      >
        <Box width={[1, 1, 1 / 3]}>
          <Image
            sx={{
              borderRadius: '03%'
            }}
            width={['350px']}
            height={['350px']}
            src="/images/ahmad_noor.jpeg"
          />
        </Box>
        <Box
          textAlign={['center', 'center', 'initial']}
          width={['90%', 1 / 2]}
          mr={['10px', '10px', 0]}
          ml={['15px', '15px', '40px']}
          mt={10}
          sx={{ margin: 'auto' }}
        >
          <SpanText firstText="FAILURE IS THE CONDIMENT THAT GIVES" secondText="SUCCESS" fcolor="#000" />
          <Text
            as="p"
            fontWeight={400}
            fontFamily="sans-serif"
            sx={{ textAlign: 'start', textTransform: 'capitalize', opacity: 7 }}
            color="white"
            py={[20, 20, 25]}
          >
            {data.bio}
          </Text>
          <Button>
            Download CV
          </Button>
        </Box>
      </Flex>
    </Flex>
  </>
);

export default About;
