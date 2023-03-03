import { join } from "path";
import source from "~frontend/source/scripts/build/constants/source/source";
import getBabelLoader from "~frontend/source/scripts/build/loaders/get-babel-loader/get-babel-loader";
import getCacheLoader from "~frontend/source/scripts/build/loaders/get-cache-loader/get-cache-loader";
import getTSLoader from "~frontend/source/scripts/build/loaders/get-ts-loader/get-ts-loader";
import Mode from "~frontend/source/scripts/build/types/mode/mode";

type GetTypeScriptLoaderArguments = {
  targetToModern: boolean;
  mode: Mode;
  withESBuild?: boolean;
};

const getTypeScriptLoader = ({
  targetToModern,
  mode,
  withESBuild,
}: GetTypeScriptLoaderArguments) => {
  return {
    test: /\.(ts|tsx|js|jsx)$/,
    include: [
      join(process.cwd(), source),
      join(process.cwd(), "..", "backend"),
    ],
    use: [
      getCacheLoader(),
      {
        loader:
          mode === Mode.Development && withESBuild
            ? "esbuild-loader"
            : "babel-loader",
        options:
          withESBuild && mode === Mode.Development
            ? {
                loader: "tsx",
                target: "esnext",
              }
            : getBabelLoader({
                targetToModern,
                mode,
              }),
      },
      getTSLoader(),
    ],
  };
};

export default getTypeScriptLoader;
