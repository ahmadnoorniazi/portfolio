import React from 'react';
import { Link, Box } from 'rebass';
import ChevronUp from '../../icons/up-chevron.svg';

const ScrollButton = () => (
  <Box
    variant="none"
    p="10px 15px"
    backgroundColor="secondary"
    sx={{ border: '1px solid #fff', borderRadius: '50px' }}
  >
    <Link href="#about" mt={2} sx={{ display: 'inline-block' }}>
      <ChevronUp fill="#fff" />
    </Link>
  </Box>

);

export default ScrollButton;
