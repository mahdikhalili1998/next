import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <p className="bg-red-400 text-white text-center mb-10">this is header</p>
      <Component {...pageProps} />
      <p className=" text-white text-center bg-pink-400 justify-center rounded-lg mt-10">this is footer</p>
    </>
  );
}

export default MyApp;
