import React from 'react';
import { Box } from 'rebass';
import Paragraph from '../Paragraph';
import SpanText from '../SpanText';

const Description = ({
  smallText, primarText, secondaryText,
}) => (
  <Box width={[1]} my={20} px={15}>
    <Paragraph
      fontFamily="open sans,sans-serif"
      sx={{ textTransform: 'uppercase' }}
      fontSize="16px"
      lineHeight="16px"
      color="secondary"
      fontWeight={800}
      textAlign={['center', 'center', 'initial']}
    >
      {smallText}
    </Paragraph>
    <SpanText textAlign={['center', 'center', 'initial']} firstText={primarText} secondText={secondaryText} />
  </Box>
);

export default Description;
