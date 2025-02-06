import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import "../styles/globals.css"; // ✅ Move global styles here

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> {/* Navbar is globally included */}
      <Component {...pageProps} />
    </>
  );
}
