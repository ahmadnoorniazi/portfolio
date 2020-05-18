import React from 'react';
import { tabsList } from '../../data';
import Tabs from '../Tabs';

const RenderTabs = () => (
  <Tabs tabsList={tabsList} />
);

export default RenderTabs;
