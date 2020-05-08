import React from 'react';
import { Box, Flex } from 'rebass';
import BorderText from '../BorderText';
import Paragraph from '../Paragraph';
import SpanText from '../SpanText';

const Description = ({
  smallText, primarText, secondaryText, description
}) => (
  <Flex width={1} px={15} sx={{ textAlign: 'center' }} mb={30} flexDirection={['column', 'column', 'row']}>
    <Box width={[1, 1, 1 / 2]} my={20} m="auto">
      <Paragraph
        fontFamily="sans-serif"
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
    <Box width={[1, 1, 1 / 2]} my={20} px="15px">
      <BorderText textAlign={['justify', 'justify', 'initial']}>
        {description}
      </BorderText>
    </Box>
  </Flex>
);

export default Description;
