import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import { NextPage } from "next";
import { ReactElement } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
