const path = require("path");
const tsconfigPaths = require("vite-tsconfig-paths").default;
const svgrPlugin = require("vite-plugin-svgr");
const macrosPlugin = require("vite-plugin-babel-macros");
const WindiCSS = require("vite-plugin-windicss");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },

  viteFinal: async (config) => {
    config.plugins = [
      ...config.plugins,
      macrosPlugin.default(),
      WindiCSS.default(),
      svgrPlugin.default(),
    ];

    config.plugins.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "", "tsconfig.json")],
      })
    );

    return config;
  },
};
