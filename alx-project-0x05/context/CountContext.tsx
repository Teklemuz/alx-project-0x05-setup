import { createContext, useContext, useState, ReactNode } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CountContext = createContext<CountContextProps | undefined>(undefined);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount((prevCount) => prevCount + 1);
  const decrement = (): void => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextProps => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("useCount must be within a CountProvider");
  }

  return context;
};
