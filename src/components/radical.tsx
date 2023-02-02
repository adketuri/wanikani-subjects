import { FC } from "react"
import { CollectionObject, RadicalData } from "../types/store.types"
import { CollectionObjectView } from "./collection-object-view";

export interface RadicalProps {
    radical: CollectionObject<RadicalData>;
}
export const Radical: FC<RadicalProps> = ({radical}) =>{
    return (<CollectionObjectView collectionObject={radical}/>)
}