import { resolve } from "path";

const getCacheLoader = () => {
  return {
    loader: "cache-loader",
    options: {
      cacheDirectory: resolve(".webpackCache"),
    },
  };
};

export default getCacheLoader;
