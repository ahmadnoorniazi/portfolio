import React, { useState } from 'react';
import {
  Card, Box,
} from 'rebass';
import Heading from '../../Components/Heading';
import theme from '../../theme';

const SkillCard = ({
  skillsList, name, Icon, isHover
}) => (
  <Card
    width={1}
  >
    <Box>
      <Box sx={{ textAlign: 'center' }}>
        <Icon fill={isHover ? theme.colors.white : theme.colors.secondary} />
        <Heading fontWeight="bold" color={isHover ? theme.colors.white : theme.colors.secondary}>{name}</Heading>
      </Box>
      <Box height="1px" width={1} bg={isHover ? theme.colors.white : theme.colors.secondary} my={20} />
      <Box>
        <ul style={{
          listStyleType: 'square', color: '#FFFFFF', fontWeight: 'bold'
        }}
        >
          {
            skillsList.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))
          }
        </ul>
      </Box>
    </Box>
  </Card>
);

export default SkillCard;
