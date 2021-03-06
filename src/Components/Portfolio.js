/* eslint-disable */

import React, { Component, useState } from 'react';
import { Flex, Box } from 'rebass'
import Description from './Description';
import Canvas from './Canvas';
import Paragraph from './Paragraph';
import SkillCard from '../layout/SkillCard';
import SpanText from './SpanText';
import Devops from '../icons/settings.svg';
import Frontend from '../icons/applicant.svg'
import Backend from '../icons/computing-cloud.svg'
import witTheme from '../utils/themeHoc';

const Skills = ({data, theme}) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Box 
      sx={{
        overflow: 'hidden'
      }} 
      id="skills" 
      bg="primary"
      pt={50} 
      px={[10, 10, 130]}
    >
      <Description primarText="My" secondaryText="Skills" smallText="My Skills"  />
      <Flex width={1} flexWrap='wrap' justifyContent="start" px={[1, 1, 15]} flexDirection={['column', 'column', 'row']} my={40}>
      {  [
      {
        name: 'Frontend Development',
        Icon: Frontend,
        skillsList: ['ReactJs', 'ReduxJs', 'VueJs', 'TDD: Jest, Enzyme, react-testing-library']
      },
      {
        name: 'Back-End Development',
        Icon: Backend ,
        skillsList: ['NodeJs', 'ExpressJs', 'Rest Artitechure', 'GraphQl', 'MongoDB', 'MYSQL']
      },
      {
        name: 'Tools & System config',
        Icon: Devops,
        skillsList: ['Webpack', 'AWS, EC2, S3, Cloudfront' , 'Digital Ocean', 'Linux', 'MacOs']
      }
    ].map((item) => (
       <Box 
        width={[1, 1, '32%']} p={4} mr={3} my={3}
        bg="primary"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          ':hover': {
            background: 'linear-gradient(to right, #1d976c, #08d665)'
          },
          border: `10px solid ${theme.colors.grayBorder}`
      }}>
         <SkillCard key={item.name} isHover={isHover} {...item}   />
       </Box>
      ))}
      </Flex>
    </Box>
  );
};

export default witTheme(Skills);
