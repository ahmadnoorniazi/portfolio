import React, { useState, useEffect } from 'react';
import {
  Box, Link, Flex
} from 'rebass';

function Tabs({ tabsList }) {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const tabName = window.location.hash.substr(1);
    setActiveTab(tabName || tabsList[0].key);
  });

  return (
    <Flex justifyContent="center" flexWrap="wrap" flexDirection={['column', 'column', 'row']}>
      {tabsList.map((child) => {
        const { label, key } = child;
        return (
          <Box
            key={key}
            width={1 / tabsList.length}
            sx={{
              textAlign: 'center',
              margin: 'auto'
            }}
          >
            <Link
              width={1}
              py={26}
              px={20}
              onClick={() => setActiveTab(key)}
              color="#c8c6c6 !important"
              fontSize="16px"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: activeTab === key && '2px solid #08d665',
                ':hover': {
                  borderBottom: '2px solid #08d665'
                },
              }}
              href={`#${child.key}`}
            >
              {label}
            </Link>
          </Box>

        );
      })}
    </Flex>
  );
}

export default Tabs;
