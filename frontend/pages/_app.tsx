import type { AppProps } from "next/app";
import Global from "@styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {Global}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
