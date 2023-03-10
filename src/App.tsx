// ** React Imports
import { FC, Suspense } from "react";

// ** Router Import
import Router from "./router";

const App: FC = () => {

  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
