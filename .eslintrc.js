module.exports = {
  "env": {
    "es6": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "func-names": [
      "error",
      "never"
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allow": ["_id", "_parentId"]
      }
    ],
    "no-console": [
      "warn",
      {
        "allow": ["info", "error"]
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ]
  }
};
