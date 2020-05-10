import React, { useState, useEffect } from 'react';
import {
  Box, Link as Nav, Flex
} from 'rebass';
import styled from 'styled-components';
import { border, compose } from 'styled-system';
import './style.css';

const Link = styled(Nav)`
${compose(border)}`;

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
            width={[1, 1, 1 / tabsList.length]}
            m={[0, 0, 'auto']}
            textAlign={['initial', 'initial', 'center']}
          >
            <Link
              width={1}
              py={26}
              px={20}
              onClick={() => setActiveTab(key)}
              color="#c8c6c6 !important"
              fontSize="16px"
              variant="nav"
              borderBottom={[activeTab === key ? '2px solid #08d665' : '2px solid rgba(0, 0, 0, .15)', activeTab === key && '2px solid #08d665']}
              display="block"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textDecoration: 'none',
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
