import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { Store } from "../types/store.types";

type StoreProviderProps = {
  children?: React.ReactNode;
};

const StoreContext = createContext<Store>({});

export const useStore = () => useContext(StoreContext);

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");
  const [subjects, setSubjects] = useState([]);
  const fetchSubjects = useCallback(async() => {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${apiKey}`);
    const options: RequestInit = {
      method: 'GET',
      headers,
      redirect: 'follow'
    };
    try {
      const response = await fetch("https://api.wanikani.com/v2/subjects/", options);
      const subjects = await response.json();
      setSubjects(subjects);
    } catch(e){
      console.error("Error fetching", e);
    }
  }, []);
  const store = { apiKey, setApiKey, subjects, fetchSubjects };

  useEffect(() => {
    if (store.apiKey) localStorage.setItem("apiKey", store.apiKey);
  }, [store.apiKey]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
