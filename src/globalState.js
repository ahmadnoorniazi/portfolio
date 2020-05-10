import React from 'react';

export const MyContext = React.createContext({
  isOpenSideBar: false,
  onClickSideBar: () => {}
});

export const { Provider } = MyContext;
