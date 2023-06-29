import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "./features/main/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      {/*<ReactQueryDevtools />*/}
    </QueryClientProvider>
  );
}

export default App;
