import { type AppType } from "next/app";

import { api } from "u/utils/api";

import "u/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
