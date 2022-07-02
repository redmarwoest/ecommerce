import { AppProps } from "next/app";
import { FC } from "react";
import "@assets/main.css";
import "keen-slider/keen-slider.min.css";
import { UIProvider } from "@components/ui/context";

const Noop: FC = ({ children }: any) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
