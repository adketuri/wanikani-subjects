import { Input } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useStore } from "./store-provider";

export const KeyEntry: FC = () => {
    const store = useStore();

    return <Input value={store.apiKey || ""} onChange={(e) => store.setApiKey?.(e.target.value)} />
}