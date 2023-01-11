import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Box bg="gray.700">
        <Container>
          <Flex gap={4} my={4}>
            <Link to={`/`}>Home</Link>
            <Link to={`subjects`}>Subjects</Link>
          </Flex>
        </Container>
      </Box>
      <Container mt={4}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
