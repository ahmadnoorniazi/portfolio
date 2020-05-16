/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Flex } from 'rebass';
import theme from '../../theme';

const Canvas = ({ percentage }) => (
  <Box style={{ width: 200, height: 200 }}>
    <CircularProgressbarWithChildren
      styles={buildStyles({
        strokeLinecap: 'butt',
        pathColor: theme.colors.secondary,
        trailColor: theme.colors.white,
      })}
      value={percentage}
    >
      <Flex sx={{ position: 'relative', textAlign: 'center' }}>
        <strong style={{
          lineHeight: '42px',
          fontSize: '48px',
          color: theme.colors.white,
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 'bolder',
          marginRight: '25px'
        }}
        >
          {percentage}
        </strong>
        <i style={{
          color: theme.colors.white,
          position: 'absolute',
          bottom: 0,
          right: 0,
          fontSize: '24px',
          lineHeight: '35px',
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 'bolder'
        }}
        >
          %
        </i>
      </Flex>
    </CircularProgressbarWithChildren>
  </Box>
);

export default Canvas;
