import { useContext } from "react";
import { StoreContext } from "..";

export const useStore = () => {
    const store = useContext(StoreContext);
    return store
}