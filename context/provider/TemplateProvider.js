import { createContext, FC, useState, Dispatch, SetStateAction } from 'react';

export const TemplateContext = createContext();

const TemplateProvider = ({ children }) => {
  const [iniState, setInitState] = useState(null);

  return (
    <TemplateContext.Provider value={{ setInitState, iniState }}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
