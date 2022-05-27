import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      0,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
};

module.exports = Configuration;
