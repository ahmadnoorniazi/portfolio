import React from 'react';
import {
  Box as Main, Flex as Wrapper, Image, Text
} from 'rebass';
import styled from 'styled-components';
import {
  layout, compose, position, typography
} from 'styled-system';
import Button from './Button';
import SpanText from './SpanText';

const Flex = styled(Wrapper)`
${compose(layout, position)}`;
const Box = styled(Main)`
${compose(typography)}`;

const About = () => (
  <Flex
    id="about"
    bg="primary"
    mb="30px"
    width={1}
    height="700px"
    justifyContent="center"
    sx={{
      position: 'relative'
    }}
  >
    <Flex
      position="absolute"
      left={[0, '5%', '20%']}
      top={['10%', '10%', '25%']}
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQvq-NTsapFOvnWCVeU-guFDAQWyI5yCRyEzFnwYApa5zByx-R&usqp=CAU"
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
        <SpanText firstText="FAILURE IS THE CONDIMENT THAT GIVES" secondText="SUCCESS" />
        <Text as="p" fontWeight={400} sx={{ textAlign: 'justify' }} color="white" my={[20, 20, 25]}>
          Spend more time focusing on the important aspects of your business.
          Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced
          virtual HR company, we are offering online HR systems that can be customized depending on your business needs.
        </Text>
        <Button px={30}>
          Download CV
        </Button>
      </Box>
    </Flex>
  </Flex>
);

export default About;
