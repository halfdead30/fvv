import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/lazy/lazy.scss";
import "../styles/globals.scss";
import { AppContextProvider } from "../context";
import { default as Provider } from "../provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </AppContextProvider>
  );
}

export default MyApp;
