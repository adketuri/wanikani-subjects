import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ErrorPage } from "./components/error-page";
import { StoreProvider } from "./components/store-provider";
import { SubjectList } from "./components/subject-list";
import { Store } from "./types/store.types";

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



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ChakraProvider>
  </React.StrictMode>
);
