const airbnb = require("@neutrinojs/airbnb");
const react = require("@neutrinojs/react");
const mocha = require("@neutrinojs/mocha");
const typescript = require("neutrinojs-typescript");
const typescriptLint = require("neutrinojs-typescript-eslint");

module.exports = {
  options: {
    root: __dirname
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
    airbnb({      
      eslint: {baseConfig: {
      rules: {
        "react/react-in-jsx-scope": "off",
        "import/no-extraneous-dependencies": "off",
        "react/jsx-filename-extension": [0, { "allow": "as-needed" }],
        "max-len": 0,
        "quotes": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "object-curly-newline": "off",
        "react/jsx-props-no-spreading": "off",
        "react/forbid-prop-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react/destructuring-assignment": "off",
        "@typescript-eslint/no-shadow": "off",
        "react/require-default-props": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/prefer-default-export": "off",
        "prefer-template": "off",
      }
    }
    }
}),
react({
      html: {
        title: "invoice-web",
      },
    }),
    mocha(),
  ],
};
