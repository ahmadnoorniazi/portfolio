import React from 'react';
import {
  Card, Image, Box
} from 'rebass';
import theme from '../../theme';

const ProjectCard = () => (
  <Box
    width={1}
    sx={{
      'z-index': 1,
      'overflow-x': 'hidden',
      transition: 'all 0.25s ease-in',
      '-moz-transition': 'all 0.25s ease-in',
      backgroundPosition: 'bottom left',
      backgroundRepeat: ' no-repeat',
      backgroundSize: '200% 100%',
      backgroundImage: `linear-gradient(to left, ${theme.colors.secondary} 50%, red 50%)`,
      ':hover': {
        '-webkit-transition': 'all 0.25s ease-in',
        ' -moz-transition': 'all 0.25s ease-in',
        transition: 'all 0.25s ease-in',
        backgroundPosition: 'bottom right'

      }
    }}
  >
    <Card
      width={1}
      p={4}
      bg="#131617"
    >
      <Image src="/images/FreedomMobile.png" />
    </Card>
  </Box>
);

export default ProjectCard;
