import isChromatic from "chromatic/isChromatic";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
const fontLoader = async () => ({
  fonts: await document.fonts.ready,
});

export const loaders = isChromatic() && document.fonts ? [fontLoader] : [];
