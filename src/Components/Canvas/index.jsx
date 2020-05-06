/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Flex } from 'rebass';

const Canvas = ({ percentage }) => (
  <Box style={{ width: 200, height: 200 }}>
    <CircularProgressbarWithChildren
      styles={buildStyles({
        strokeLinecap: 'butt',
        pathColor: '#08d665',
        trailColor: '#FFFFFF',
      })}
      value={percentage}
    >
      <Flex sx={{ position: 'relative', textAlign: 'center' }}>
        <strong style={{
          lineHeight: '42px', fontSize: '48px', color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 'bolder', marginRight: '25px'
        }}
        >
          {percentage}
        </strong>
        <i style={{
          color: '#FFFFFF',
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
