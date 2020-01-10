module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'standard',
    'plugin:unicorn/recommended',
  ],
  'plugins': [
    'standard',
    'promise',
    'unicorn',
  ],
  'rules': {
    'arrow-parens': ['error', 'always'],
    'new-cap': [ 'warn', {
      'capIsNew': true,
    } ],
    'camelcase': 0,
    'comma-dangle': [ 'error', 'always-multiline' ],
    'import/extensions': [ 'error', 'always', { 'js': 'never' } ],
    'import/newline-after-import': [ 'error' ],
    'import/no-internal-modules': [ 'error', {
      'allow': [ '**/lib/*' ],
    } ],
    'import/no-namespace': 'error',
    'no-await-in-loop': [ 'error' ],
    'no-confusing-arrow': ['error', {'allowParens': true}],
    'no-console': [ 'error', { 'allow': [ 'info', 'warn', 'error' ] } ],
    'no-implicit-coercion': [ 'error' ],
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'all',
      'caughtErrors': 'all',
      'varsIgnorePattern': '[iI]gnored',
      'argsIgnorePattern': '[iI]gnored',
      'caughtErrorsIgnorePattern': '[iI]gnored',
      'ignoreRestSiblings': true,
    }],
    'no-var': [ 'error' ],
    'prefer-const': [ 'error' ],
    'prefer-template': [ 'error' ],
    'require-await': [ 'error' ],
  },
}
