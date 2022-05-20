import "../styles/styles.scss";

import { FronteggProvider } from "@frontegg/nextjs";

//implementatie van login/register/password forget features
//https://www.npmjs.com/package/@frontegg/nextjs
const contextOptions = {
  baseUrl: "https://app-6z839m383iw9.frontegg.com", // Your backend base URL (frontegg will direct the requests to it)
};

const App = ({ Component, pageProps }) => {
  return (
    <FronteggProvider contextOptions={contextOptions}>
      <Component {...pageProps} />
    </FronteggProvider>
  );
};
export default App;
