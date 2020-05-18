import React from 'react';
import { Box, Flex } from 'rebass';
import ProjectCard from '../layout/ProjectCard';
import Description from './Description';

const Projects = () => (
  <Box
    sx={{
      position: 'relative'
    }}
    id="projects"
    bg="primary"
    pt={50}
    px={[10, 10, 130]}
  >
    <Description primarText="My" secondaryText="Latest Projects" smallText="My Projects" />
    <Flex flexWrap="wrap" justifyContent="center" flexDirection={['column', 'column', 'row']}>
      {
        [1, 2, 3].map((item) => (
          <Box width={[1, 1, 1 / 3]} p={3} key={item}>
            <ProjectCard />
          </Box>
        ))
      }
    </Flex>
  </Box>
);

export default Projects;
