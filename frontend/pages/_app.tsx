import type { AppProps } from "next/app";
import Global from "@styles/globalStyle";
import Layout from "src/components/99_Etc/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {Global}
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
