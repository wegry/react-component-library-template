import * as path from "path";
import { Configuration, EntryObject } from "webpack";
import * as fs from "fs";

const getEntries = (): EntryObject => {
  const exportingFolder = path.join(__dirname, "..", "src", "lib");
  const exportingFileExtensions = [".tsx", ".ts"];

  return fs
    .readdirSync(exportingFolder)
    .filter((file) => exportingFileExtensions.includes(path.extname(file)))
    .reduce<EntryObject>((entries, file) => {
      return {
        ...entries,
        [file]: path.join(exportingFolder, file),
      };
    }, {});
};

export default {
  entry: getEntries(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-env",
              "@babel/preset-react",
            ],
            plugins: ["babel-plugin-styled-components"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
} as Configuration;
