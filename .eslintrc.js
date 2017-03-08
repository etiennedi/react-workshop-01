module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "flowtype",
    ],
    "env": {
        "browser": true,
    },
    "rules": {
      "react/jsx-max-props-per-line" : ["error", { "maximum": 1 }] }
};
