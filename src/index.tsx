import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ErrorPage } from "./components/error-page";
import { SubjectList } from "./components/subject-list";
import { Store } from "./components/types/store.types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "subjects/",
        element: <SubjectList />,
      },
    ],
  },
]);
const theme = extendTheme({
  styles: {
    global: {
      "#root": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    },
  },
});
export const StoreContext = createContext<Store>({});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <StoreContext.Provider value={{}}>
        <RouterProvider router={router} />
      </StoreContext.Provider>
    </ChakraProvider>
  </React.StrictMode>
);
