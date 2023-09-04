import React, { createContext, useState , } from "react";
interface ChildrenProps {
  children: React.ReactNode;
}


interface ContextType {
  str: Data;
  setData: React.Dispatch<React.SetStateAction<Data>> | null;
}

interface Data {
  string: string;
}

export const HelloContext = createContext<ContextType | null>(null);

  const HelloContextProvider: React.FC<ChildrenProps> = (props) => {
  const [str, setData] = useState<Data>({ string: "hello world" });

  return (
    <HelloContext.Provider value={{ str, setData }}>
      {props.children}
    </HelloContext.Provider>
  );
};

export default HelloContextProvider;
