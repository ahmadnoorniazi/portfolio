import React from 'react';
import {
  Box, Flex as Wrapper, Image
} from 'rebass';
import styled from 'styled-components';
import { layout, compose, position } from 'styled-system';
import Heading from './Heading';

const Flex = styled(Wrapper)`
${compose(layout, position)}`;
const About = () => (
  <Flex
    id="about"
    bg="primary"
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
      <Box width={['90%', 1 / 2]} mr={['10px', '10px', 0]} ml={['10px', '10px', '40px']} sx={{ textAlign: 'center', margin: 'auto' }}>
        <Heading color="white" as="h1">
          FAILURE IS THE CONDIMENT THAT GIVES
          <Heading ml={2} as="span" color="secondary">
            SUCCESS
          </Heading>
        </Heading>
      </Box>
    </Flex>
  </Flex>
);

export default About;
