import type { Configuration as WebpackConfiguration } from "webpack";
import type { Configuration as WebpackDevelopmentServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevelopmentServerConfiguration;
}

export default Configuration;
