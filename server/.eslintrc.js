module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Match frontend style
    'quotes': ['error', 'double'],
    'semi': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'max-len': ['error', 550],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
        ],
      },
    ],
    // Useful for backend
    'no-console': 'off',
    'import/extensions': 'off',
  },
};
