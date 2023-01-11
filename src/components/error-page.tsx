import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage: FC = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>{isRouteErrorResponse(error) && error.data}</Text>
    </>
  );
};
