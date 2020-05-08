/* eslint-disable */

import React, { Component } from 'react';
import { Flex, Box } from 'rebass'
import Description from './Description';
import Canvas from './Canvas';
import Paragraph from './Paragraph';

const Skills = ({data}) => {
  return (
    <Box bg="primary" id="skills" pt={50} px={[10, 10, 130]}>
      <Description description="Where i have worked" primarText="My" secondaryText="Skills" smallText="My Skills"  />
      <Flex width={1} flexWrap='wrap' justifyContent="space-between" px={15} flexDirection={['column']} my={40}>
      {
        data.skills.map(val => (
          <Flex width={[1]} sx={{textAlign: "-webkit-center"}} my={20}>
            <Box width={1 / 4} sx={{textAlign: "initial"}}>
              <Paragraph fontSize="24px" fontWeight={600} my={15} color="white" mr={40}>
                {val.name}
              </Paragraph>
            </Box>
            <Box bg="white" height="40px" width="500px" m="auto">
              <Box bg="secondary" height="40px" width={`${val.level}%`} sx={{left: 0}} />
            </Box>
          </Flex>
        ))
      }
      </Flex>
    </Box>
  );
};

export default Skills;
