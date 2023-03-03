import { join } from "path";

const getTSLoader = () => {
  return {
    loader: "ts-loader",
    options: {
      configFile: join(process.cwd(), "tsconfig.json"),
    },
  };
};

export default getTSLoader;
