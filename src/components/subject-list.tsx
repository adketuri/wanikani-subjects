import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { useStore } from "./store-provider";

export const SubjectList: FC = () => {
  const store = useStore();
  return (
    <>
      <Text>Subject List</Text>
      <Text>{store.apiKey}</Text>
    </>
  );
};
