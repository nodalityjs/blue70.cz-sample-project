import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  entry: "nodality",               // bundle Nodality only
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "lib.bundle.js",
    library: { type: "module" },   // ESM output
    environment: { module: true },
    clean: true,
    publicPath: "/",
  },
  experiments: { outputModule: true },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } },
      },
    ],
  },
};