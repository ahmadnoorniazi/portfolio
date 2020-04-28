import React from 'react';
import { Card, Image, Heading, Box } from 'rebass';
import Chevron from '../../icons/chevron.svg';

function CardDetail(props) {
  return (
    <Card
      width={350}
      px={{
        border: '1px solid #4caf50'
      }}
    >
      <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
      <Box bg="#FFFF">
        <Heading>Card</Heading>
        <Chevron />
        
      </Box>
    </Card>
  );
}

export default CardDetail;
