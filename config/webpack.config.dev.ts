import { Configuration } from "webpack";
import config from "./webpack.config";

export default {
  ...config,
  mode: "development",
} as Configuration;
