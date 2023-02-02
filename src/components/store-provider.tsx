import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { Collection, Store, SubjectData } from "../types/store.types";
import camelcaseKeys from "camelcase-keys";

type StoreProviderProps = {
  children?: React.ReactNode;
};

const StoreContext = createContext<Store>({});

export const useStore = () => useContext(StoreContext);

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");
  const [subjects, setSubjects] = useState<Collection<SubjectData>>();
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
      const subjects: Collection<SubjectData> = await response.json();
      setSubjects(camelcaseKeys(subjects));
    } catch(e){
      console.error("Error fetching", e);
    }
  }, []);
  const store: Store = { apiKey, setApiKey, subjects, fetchSubjects };

  useEffect(() => {
    if (store.apiKey) localStorage.setItem("apiKey", store.apiKey);
  }, [store.apiKey]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
