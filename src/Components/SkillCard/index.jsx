import React, { useState } from 'react';
import {
  Card, Box, Heading
} from 'rebass';
import theme from '../../theme';

const SkillCard = ({ skillsList, name, Icon }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Card
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      width={1}
      bg="primary"
      sx={{
        ':hover': {
          background: theme.colors.hover
        },
        border: `5px solid ${theme.colors.grayBack}`
      }}
    >
      <Box m={30}>
        <Box sx={{ textAlign: 'center' }}>
          <Icon fill={theme.colors.white} />
          <Heading fontWeight="bold" color={onHover ? theme.colors.white : theme.colors.secondary}>{name}</Heading>
        </Box>
        <Box height="1px" width={1} bg={onHover ? theme.colors.white : theme.colors.secondary} my={20} />
        <Box>
          <ul style={{
            listStyleType: 'square', color: theme.colors.white, fontWeight: 'bold'
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
