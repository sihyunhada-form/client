import "@styles/fonts.css";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import DefaultSeoInfo from "next-seo.config";
import type { AppProps } from "next/app";
import { Applayout } from "~/@components/templates/Applayout";
import GlobalStyle from "~/@styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Applayout>
      <DefaultSeo {...DefaultSeoInfo} />
      <GlobalStyle />
      <Component {...pageProps} />
    </Applayout>
  );
};

export default appWithTranslation(App);
