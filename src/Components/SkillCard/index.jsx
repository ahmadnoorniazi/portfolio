import React, { useState } from 'react';
import {
  Card, Box, Text, Flex, Heading
} from 'rebass';
import Settings from '../../icons/settings.svg';
import theme from '../../theme';

const SkillCard = ({ skillsList, name }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Card
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      width={1}
      bg="#131617"
      sx={{
        ':hover': {
          background: theme.colors.hover
        },
        border: `5px solid ${theme.colors.secondary}`
      }}
    >
      <Box m={30}>
        <Box sx={{ textAlign: 'center' }}>
          <Settings fill={onHover ? theme.colors.white : theme.colors.secondary} />
          <Heading fontWeight="bold" color={theme.colors.white}>{name}</Heading>
        </Box>
        <Box height="1px" width={1} bg={onHover ? theme.colors.white : theme.colors.secondary} my={20} />
        <Box>
          <ul style={{
            'list-style-type': 'square', color: '#FFFFFF', fontWeight: 'bold'
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
};

export default SkillCard;
