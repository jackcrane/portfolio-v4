import "../assets/styles/globals.css";
import banner from "../assets/styles/banner.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@200;400&family=Rubik&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}
