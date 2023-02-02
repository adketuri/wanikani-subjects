import { FC, useEffect } from "react";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { useStore } from "./store-provider";
import { Radical } from "./radical";
import { CollectionObject, KanjiData, RadicalData } from "../types/store.types";
import { Kanji } from "./kanji";

export const SubjectList: FC = () => {
  const store = useStore();

  useEffect(() => {
    store.fetchSubjects?.();
  }, []);

  return (
    <Skeleton isLoaded={!!store.subjects}>
      <Text>Subject List</Text>
      <SimpleGrid columns={[3, 4, 5]} spacing={10}>
      {store.subjects?.data?.map(s => {
        switch(s.object){
          case "radical": return <Radical radical={s as CollectionObject<RadicalData>}/>
          case "kanji": return <Kanji kanji={s as CollectionObject<KanjiData>}/>
          default: return <Text key={s.id}>{JSON.stringify(s)}</Text>
        }
      })}
      </SimpleGrid>
    </Skeleton>
  );
};
