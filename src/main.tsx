import { createRoot } from "react-dom/client";
import "./cssreset.css";
import "./index.css";
import App from "./App.tsx";

import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
