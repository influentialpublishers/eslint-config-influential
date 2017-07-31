module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:flowtype/recommended",
    "standard",
    "plugin:unicorn/recommended",
  ],
  "plugins": [
    "flowtype",
    "standard",
    "promise",
    "unicorn",
  ],
  "rules": {
    "comma-style": [ "error", "last" ],
    "comma-angle": [ "error", "always-multiline" ],
    "prefer-const": [ "error" ],
    "no-var": [ "error" ],
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
