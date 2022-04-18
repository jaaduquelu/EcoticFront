import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./helpers/themaConfig";

import store from "./redux/store";
import { AppRouter } from "./routers/AppRouter";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { persistStore } from "reduxjs-toolkit-persist";

// Azure
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./API/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <>
      {/* Themas de Material UI */}
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* Redux-Persist */}
          <PersistGate loading={null} persistor={persistStore(store)}>
            {/* Auth Active Directory de Azure */}
            <MsalProvider instance={msalInstance}>
              <AppRouter />
            </MsalProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
