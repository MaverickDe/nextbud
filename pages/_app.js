import "@/styles/globals.css";
import Head from "next/head";
import { useState, useReducer, useEffect } from "react";
import react, { useContext, createContext } from "react";
import { Contextapi1 } from "@/contextApi/context2";
import { Dialog, Modal } from "@mui/material";
import { DOMAIN } from "@/components/const";
// import { Provider } from "react-redux";
import { store } from "../redux/store/store";
// import { persistStore } from "redux-persist";
import ReduxProvider from "@/redux/store/provider";
import ReduxProviderPage from "@/components/Layout/providerpage";
import { ThemeProvider } from "@material-tailwind/react";
import { useAppSelector, AppDispatch } from "../redux/store/store";
import { handleclose } from "@/redux/slices/centermodals";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  let [sideToast, setSideToast] = useState({ message: null, type: true });

  let reducer = (state, action) => {
    let state_ = { ...state };

    switch (action.type) {
    }

    return state_;
  };

  let setSideToastHelper = (message, type) => {
    let toast = { ...sideToast };
    toast.message = message;

    toast.type = type;

    setSideToast(toast);
    setTimeout(() => {
      setSideToast({ message: null, type: false });
    }, 3000);
  };
  let [initdata, dispatch] = useReducer(reducer, {
    setSideToastHelper,
    menu1: false,
  });

  useEffect(() => {
    let darkmode = localStorage.getItem("darkmode");
    if (darkmode && darkmode == "true") {
      document.querySelector("html").classList.add("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <meta property="og:image" content="/logo/logo1.svg" />

        <meta property="og:url" content={DOMAIN} />
        <meta property="og:type" content="website" />
      </Head>

      {sideToast.message && (
        <div
          className={`border-b-[1px] w-fit max-w-full rounded-md shadow-md min-h-[50px] px-[5px] bg-white flex items-center z-50  fixed top-[0px] right-[0px] ${
            sideToast.type
              ? "text-[blue] border-[blue]"
              : "text-[red] border-[red] "
          } `}
        >
          <b>{sideToast.message}</b>
        </div>
      )}

      <div className="err font-nueuthin  w-full h-full text-red fixed  flex justify-center  z-50  hidden bg-[rgba(255,255,255,0.5)] backdrop-blur-sm">
        <div className="p-5 shadow-md min-w-[100px] dark:bg-dark2 bg-[white] h-fit mt-[100px] rounded-md"></div>
      </div>
      <ReduxProvider>
        <ThemeProvider>
          <Contextapi1.Provider value={{ ...initdata, newdispatch: dispatch }}>
            <ReduxProviderPage />
            <Component
              {...{
                ...pageProps,
                setSideToast,
                setSideToastHelper,

                handleclose,

                newdispatch: dispatch,
              }}
            />
            {/* </ReduxProviderPage> */}
          </Contextapi1.Provider>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}
