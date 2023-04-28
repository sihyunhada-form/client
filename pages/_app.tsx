import { DefaultSeo } from "next-seo";
import DefaultSeoInfo from "next-seo.config";
import type { AppProps } from "next/app";
import { Applayout } from "~/@components/templates/Applayout";
import GlobalStyle from "~/@styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Applayout>
      <DefaultSeo {...DefaultSeoInfo} />
      <GlobalStyle />
      <Component {...pageProps} />
    </Applayout>
  );
}
