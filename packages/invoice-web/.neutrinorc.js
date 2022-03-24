const airbnb = require("@neutrinojs/airbnb");
const react = require("@neutrinojs/react");
const mocha = require("@neutrinojs/mocha");
const typescript = require("neutrinojs-typescript");
const typescriptLint = require("neutrinojs-typescript-eslint");

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    (neutrino) => {
      neutrino.config.performance
        .maxAssetSize(1000000)
        .maxEntrypointSize(1000000)
        .hints('warning');
    },
    typescript(),
    typescriptLint(),
    airbnb(),
    react({
      html: {
        title: "invoice-web",
      },
    }),
    mocha(),
  ],
};
