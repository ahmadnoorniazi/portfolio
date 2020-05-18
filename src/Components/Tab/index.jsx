/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Box as Wrapper, Button, Flex
} from 'rebass';
import styled from 'styled-components';
import {
  compose, border
} from 'styled-system';

const Box = styled(Wrapper)`
${compose(border)}`;

function Tabs({
  children,
  defaultActive,
  tabColor,
  activeColor,
  tabsBackground,
  borderColor,
  customTabs,
  barStyling
}) {
  const [activeTab, setActiveTab] = useState(defaultActive || children[0].props.label || '');
  console.log('customeeeeeee', customTabs && customTabs.children);
  return (
    <Box>
      <Flex
        width={1}
        flexWrap="wrap"
        {...barStyling}
        bg={tabsBackground}
      >
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Button
              key={label}
              variant="none"
              color={activeTab === label ? activeColor : tabColor}
              onClick={() => setActiveTab(label)}
              mx={4}
              px={4}
              py={3}
              fontSize={18}
              sx={{
                float: 'left',
                borderRadius: 0,
                background: 'none',
                outline: 'none',
                borderBottom: activeTab === label && `2px solid ${borderColor}`
              }}
            >
              {label}
            </Button>
          );
        })}
      </Flex>
      <Box>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </Box>
    </Box>
  );
}

export default Tabs;
