import { FC, ReactNode } from "react"
import { SubjectData, CollectionObject } from "../types/store.types"
import { Card, CardBody, Link, Text } from "@chakra-ui/react"

export interface CollectionObjectViewProps {
    collectionObject: CollectionObject<SubjectData>,
    children?: ReactNode,
}
export const CollectionObjectView: FC<CollectionObjectViewProps> = ({collectionObject, children}) => {

    return (<Card>
        <CardBody>
        <Link href={collectionObject.url}>{collectionObject.data.slug}</Link>
        {children}
        </CardBody>
    </Card>)

}