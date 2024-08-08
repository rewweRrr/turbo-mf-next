const commonConfig = require("./common");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...commonConfig,
  extends: [
    ...commonConfig.extends,
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
  env: {
    ...commonConfig.env,
    node: true,
    browser: true,
  },
};
