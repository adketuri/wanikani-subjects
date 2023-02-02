import { FC, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useStore } from "./store-provider";

export const SubjectList: FC = () => {
  const store = useStore();

  useEffect(() => {
    store.fetchSubjects?.();
  }, []);

  return (
    <>
      <Text>Subject List</Text>
      <Text>{JSON.stringify(store.subjects)}</Text>
    </>
  );
};
