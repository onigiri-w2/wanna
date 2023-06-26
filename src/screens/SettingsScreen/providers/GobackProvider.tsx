import {createContext} from 'react';

type ContextProps = {
  goBack: () => void;
};

export const GobackContext = createContext({
  goBack: () => {},
});

export const GobackProvider = ({children}: {children: React.ReactNode}) => {
  const goBack = () => {
    console.log('goBack');
  };
  return (
    <GobackContext.Provider value={{goBack}}>{children}</GobackContext.Provider>
  );
};
