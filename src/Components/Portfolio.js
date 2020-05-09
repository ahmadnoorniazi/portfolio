/* eslint-disable */

import React, { Component } from 'react';
import { Flex, Box } from 'rebass'
import Description from './Description';
import Canvas from './Canvas';
import Paragraph from './Paragraph';
import SkillCard from './SkillCard';
import SpanText from './SpanText';

const Skills = ({data}) => {
  return (
    <Box bg="primary" id="skills" pt={50} px={[10, 10, 130]}>
      <Description primarText="My" secondaryText="Skills" smallText="My Skills"  />
      <Flex width={1} flexWrap='wrap' justifyContent="start" px={[1, 1, 15]} flexDirection={['column', 'column', 'row']} my={40}>
      {  [{
        name: 'Back-End Development',
        skillsList: ['NodeJs', 'ExpressJs', 'Rest Artitechure', 'GraphQl']
      },
      {
        name: 'Frontend Development',
        skillsList: ['NodeJs', 'ExpressJs', 'Rest Artitechure', 'GraphQl']
      },
      {
        name: 'DevOps',
        skillsList: ['NodeJs', 'ExpressJs', 'Rest Artitechure', 'GraphQl']
      }
    ].map((item) => (
       <Box width={[1, 1, 1 / 3]} p={3}>
         <SkillCard key={item.name} {...item}   />
       </Box>
      ))}
      </Flex>
    </Box>
  );
};

export default Skills;
