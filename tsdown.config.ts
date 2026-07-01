import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: "src/index.ts",
  format: ["esm"],
  minify: true,
  platform: "node",
  outputOptions: {
    entryFileNames: "[name].js",
  },
  sourcemap: true,
});
