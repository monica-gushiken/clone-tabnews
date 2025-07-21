import "../styles/globals.css"; // <--- MOVA ESTA LINHA PARA CÁ!

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
