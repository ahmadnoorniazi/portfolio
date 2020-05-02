/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Card, Image, Heading, Box, Flex, Button, Text
} from 'rebass';
import Chevron from '../../icons/chevron.svg';
import ChevronUp from '../../icons/up-chevron.svg';

function CardDetail({
  children, imagePath, heading, span
}) {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Card
        width="100%"
      >
        <Box bg="#FFFFFF" height={350} sx={{ textAlign: 'center', position: 'relative' }}>
          <Image sx={{ position: 'inherit', top: '22%' }} src={imagePath} />
        </Box>
        <Flex bg="rgb(25, 26, 27)" sx={{ position: 'relative' }} flexDirection="column" p={3}>
          <Heading color="#FFFFFF">{heading}</Heading>
          <Text>{span}</Text>
          <Box
            mx={3}
            width="40px"
            height="40px"
            sx={{
              right: 0,
              position: 'absolute',
            }}
          >
            <Button
              variant="outline"
              mt={20}
              bg="rgb(25, 26, 27)"
              sx={{
                outline: 0,
                ':hover': {
                  background: 'rgb(25, 26, 27)'
                }
              }}
              p={0}
              onClick={() => setOpen(!open)}
            >
              {
                !open ? <Chevron /> : <ChevronUp />
              }
            </Button>
          </Box>
          <Box display={open ? 'block' : 'none'} my={10}>
            {children}
          </Box>

        </Flex>
      </Card>
    </Box>

  );
}

export default CardDetail;
