import { createContext, FC, useContext, useEffect, useState } from "react";
import { Store } from "../types/store.types";

type StoreProviderProps = {
  children?: React.ReactNode;
};

export const StoreContext = createContext<Store>({});
export const useStore = () => useContext(StoreContext);

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");
  const store = { apiKey, setApiKey };

  useEffect(() => {
    if (store.apiKey) localStorage.setItem("apiKey", store.apiKey);
  }, [store.apiKey]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
