import React from "react";
import { useAppSelector } from './Store/hooks'

import AppRouter from "./Pages/routes";
import Spinner from "./Components/Spinner";

function App() {
  const isLoading = useAppSelector((state) => state.product.isLoading)

  return (
    <>
      <Spinner isActive={isLoading} />
      <AppRouter />
    </>
  );
}

export default App;
