import React from 'react';
import {
  Heading, Card, Box
} from 'rebass';
import Settings from '../../icons/settings.svg';
import theme from '../../theme';

const SkillCard = () => (
  <Card
    width={1}
    bg="background"
    sx={{
      ':hover': {
        background: theme.colors.hover
      }
    }}
  >
    <Box m={30}>
      <Box sx={{ textAlign: 'center' }}>
        <Settings fill="#08d665" />
        <Heading color="white"> Back-End </Heading>
      </Box>
      <Box>
        <ul style={{ 'list-style-type': 'square', color: '#FFFFFF', marginLeft: '25px' }}>
          {
            ['Nodejs', 'ExpressJs', 'Rest Api'].map((item) => (
              <li>
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
