import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { KeyEntry } from "./components/key-entry";

function App() {
  return (
    <>
      <Box bg="gray.700">
        <Container maxW="container.lg">
          <Flex gap={4} my={4}>
            <Link to={`/`}>Home</Link>
            <Link to={`subjects`}>Subjects</Link>
          </Flex>
        </Container>
      </Box>
      <Container mt={4} maxW="container.lg">
        <KeyEntry />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
