/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import theme from '../theme';

const ThemeHoc = (WrappedComponent) => ({ ...rest }) => (
  <WrappedComponent theme={theme} {...rest} />
);

export default ThemeHoc;
