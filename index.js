module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  "plugins": [
    "standard",
    "promise"
  ],
  "rules": {
    "comma-style": [ "error", "first" ],
    "camelcase": 0,
    // We put exports first
    "import/first": 0,
    "no-use-before-define": 0,
  }
};
