import { Provider } from "react-redux";
import { Router } from "./Router";
import { store, persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;