import React from 'react';
import {
  Card, Image, Box, Flex
} from 'rebass';
import theme from '../../theme';
import LinkIcon from '../../icons/multimedia.svg';

const ProjectCard = ({ project }) => (
  <Card
    width={1}
    p={4}
    bg="grayBorder"
    sx={{ position: 'relative' }}
  >
    <Image src={project.image} height={['auto', 'auto', '300px']} sx={{ objectFit: 'fill' }} />

    <Box sx={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      opacity: 0,
      transition: '.5s ease',
      backgroundColor: theme.colors.secondary,
      ':hover': {
        opacity: 1,
      }
    }}
    >
      <Flex justifyContent="center" alignItems="center">
        <Box margin="auto">
          <LinkIcon />
        </Box>
      </Flex>
    </Box>
  </Card>
);

export default ProjectCard;
// sx={{
//   'z-index': 1,
//   'overflow-x': 'hidden',
//   transition: 'all 0.25s ease-in',
//   '-moz-transition': 'all 0.25s ease-in',
//   backgroundPosition: 'bottom left',
//   backgroundRepeat: ' no-repeat',
//   backgroundSize: '200% 100%',
//   backgroundImage: `linear-gradient(to left, ${theme.colors.secondary} 50%, red 50%)`,
//   ':hover': {
//     '-webkit-transition': 'all 0.25s ease-in',
//     ' -moz-transition': 'all 0.25s ease-in',
//     transition: 'all 0.25s ease-in',
//     backgroundPosition: 'bottom right'

//   }
// }}
