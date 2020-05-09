/* eslint-disable */

import React, { Component } from 'react';
import { Flex, Box } from 'rebass'
import Description from './Description';
import Canvas from './Canvas';
import Paragraph from './Paragraph';
import SkillCard from './SkillCard';

const Skills = ({data}) => {
  return (
    <Box bg="primary" id="skills" pt={50} px={[10, 10, 130]}>
      <Description description="Where i have worked" primarText="My" secondaryText="Skills" smallText="My Skills"  />
      <Flex width={1} flexWrap='wrap' justifyContent="space-between" px={15} flexDirection={['column']} my={40}>
        <SkillCard />
      </Flex>
    </Box>
  );
};

export default Skills;
