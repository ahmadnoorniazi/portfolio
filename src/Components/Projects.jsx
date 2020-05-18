import React from 'react';
import { Box, Flex } from 'rebass';
import ProjectCard from '../layout/ProjectCard';
import Description from './Description';

const Projects = ({ data }) => (
  <Box
    sx={{
      position: 'relative'
    }}
    id="projects"
    bg="primary"
    pt={[0, 0, 50]}
    px={[10, 10, 130]}
  >
    <Description primarText="My" secondaryText="Latest Projects" smallText="My Projects" />
    <Flex flexWrap="wrap" justifyContent="center" flexDirection={['column', 'column', 'row']}>
      {
        data && data.projects.map((item) => (
          <Box width={[1, 1, 1 / 3]} p={3} key={item}>
            <ProjectCard project={item} />
          </Box>
        ))
      }
    </Flex>
  </Box>
);

export default Projects;
