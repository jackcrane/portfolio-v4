import "../assets/styles/globals.css";
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MDY1XRG17G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MDY1XRG17G');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
