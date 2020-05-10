/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Card, Image, Box, Flex, Button, Text
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
          <Box mr={4}>
            <Text textAlign="initial" width={[1, 1, '85%']} color="#FFFFFF" as="h3" fontSize={['24', '24', '40']}>{heading}</Text>
            <Text py={2} color="gray">{span}</Text>
          </Box>
          <Box
            ml={10}
            width="40px"
            height="40px"
            sx={{
              right: 0,
              position: 'absolute',
            }}
          >
            <Button
              variant="outline"
              mt={10}
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
                !open ? <ChevronUp /> : <Chevron />
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
