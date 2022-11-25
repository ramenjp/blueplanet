import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Mainnet, DAppProvider, Config, Goerli } from "@usedapp/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DAppProvider config={{}}>
        <Component {...pageProps} />
      </DAppProvider>
    </ChakraProvider>
  );
}
