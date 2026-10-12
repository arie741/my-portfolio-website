import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ubuntu, ibmPlexMono } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ubuntu.variable} ${ibmPlexMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
