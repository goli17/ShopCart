import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/Lib/store";

interface CustomPageProps {
  Component: React.FC;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};
export default MyApp;
