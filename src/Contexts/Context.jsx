// Context.js
import { createContext, useState } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [active, setActive] = useState('');
  const makeActive = (link) => {
    setActive(link);
  };

  return (
    <Context.Provider value={{ active, setActive, makeActive }}>
      {children}
    </Context.Provider>
  );
};
