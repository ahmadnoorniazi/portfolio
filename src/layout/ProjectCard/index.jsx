import React from 'react';
import {
  Card, Image, Box, Flex, Text, Link
} from 'rebass';
import theme from '../../theme';
import LinkIcon from '../../icons/multimedia.svg';
import Heading from '../../Components/Heading';

const ProjectCard = ({ project }) => (
  <Link href={project.url}>
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
        background: 'linear-gradient(to right, #1d976c, #08d665)',
        ':hover': {
          opacity: 1,
        }
      }}
      >
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Box margin="auto" mt="30px">
            <LinkIcon />
          </Box>
          <Heading fontWeight="bold" color="white">{project.title}</Heading>
          <Text
            as="p"
            fontWeight={400}
            fontFamily="sans-serif"
            sx={{ textAlign: 'start', textTransform: 'capitalize', opacity: 7 }}
            color="white"
            p={[20, 20, 25]}
          >
            {project.description}
          </Text>
        </Flex>
      </Box>
    </Card>
  </Link>
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
