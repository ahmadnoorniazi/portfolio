import React from 'react';

export const MyContext = React.createContext({
  isOpenSideBar: false,
  onClickSideBar: () => {},
  theme: {},
  setTheme: () => {}
});

export const { Provider } = MyContext;
