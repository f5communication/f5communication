module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
          "ecmascript": 6,
          "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": 0,
      "function-paren-newline": 0,
      "import/prefer-default-export": 0,
      "import/extensions": 0,
      "func-names": 0,
      "import/no-unresolved": 0,
      "import/no-absolute-path": 0,
      "object-curly-newline": 0,
      "prefer-arrow-callback": 0,
      "no-multi-spaces":0
    }
  };