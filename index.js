module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:flowtype/recommended",
    "standard",
  ],
  "plugins": [
    "flowtype",
    "standard",
    "promise",
  ],
  "rules": {
    "comma-style": [ "error", "first" ],
    "camelcase": 0,
    // We put exports first
    "import/first": 0,
    "no-use-before-define": 0,
    "flowtype/type-id-match": [
      2,
      // Only enforce that it starts with a capital letter
      "^[A-Z][a-z0-9]*"
    ],
    "flowtype/require-valid-file-annotation": [
      2,
      "always",
      { "annotationStyle": "line" }
    ]
  }
};
