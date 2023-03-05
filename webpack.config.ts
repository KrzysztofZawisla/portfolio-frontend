import "dotenv/config";
import { Configuration } from "webpack";
import getConfigs from "~frontend/source/scripts/build/root/get-configs/get-configs";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import { TargetType } from "~frontend/source/shared/constants/target/target";

type EnvironmentArguments = {
  target: TargetType;
};

type WebpackArguments = {
  mode: Mode;
};

type SetupConfig = (
  environmentArguments: EnvironmentArguments,
  webpackArguments: WebpackArguments,
) => Promise<Configuration[]>;

const setupConfig: SetupConfig = async (
  { target }: EnvironmentArguments,
  { mode }: WebpackArguments,
): // eslint-disable-next-line max-params
Promise<Configuration[]> => {
  return await getConfigs({ targetType: target, mode });
};

export default setupConfig;
