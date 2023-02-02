import { FC } from "react"
import { CollectionObject, KanjiData } from "../types/store.types"
import { CollectionObjectView } from "./collection-object-view";

export interface KanjiProps {
    kanji: CollectionObject<KanjiData>;
}
export const Kanji: FC<KanjiProps> = ({kanji}) =>{
    return (<CollectionObjectView collectionObject={kanji}/>)
}