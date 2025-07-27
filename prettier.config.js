// Further options should be configured very rarely. See: https://prettier.io/docs/en/option-philosophy

/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-prisma"],
  // The default from prettier is 80. Increasing this to be in sync with our Python code.
  printWidth: 100,
};

export default config;
