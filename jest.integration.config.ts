import { Config } from "@jest/types";
import presetPuppeter from "jest-puppeteer/jest-preset";
import { join } from "path";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "~frontend/tsconfig.json";
import getBabelLoader from "./source/scripts/build/loaders/get-babel-loader/get-babel-loader";
import Mode from "./source/scripts/build/types/mode/mode";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "jest-extended",
    "expect-puppeteer",
    "@testing-library/jest-dom",
  ],
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: join(process.cwd(), "."),
  }),
  testMatch: ["**/*.integration.test.ts"],
  transform: {
    ".(ts|tsx)$": [
      "ts-jest",
      {
        babelConfig: getBabelLoader({
          targetToModern: true,
          mode: Mode.Production,
        }),
      },
    ],
  },
  ...presetPuppeter,
};

export default config;
