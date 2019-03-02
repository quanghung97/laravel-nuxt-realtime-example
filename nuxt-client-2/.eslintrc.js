module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "vue"
  ],
  "rules": {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': 0,
    'vue/html-indent': ['error', 2,  {
      alignAttributesVertically: true
    }],
    'vue/html-self-closing': 'off',
    'vue/name-property-casing': 'off',
    'vue/no-parsing-error': 'off',
    'vue/require-v-for-key': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: true,
      }
    }],
  }
};
