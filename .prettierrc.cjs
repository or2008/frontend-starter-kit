const config = {
  semi: false,
  tabWidth: 4,
  printWidth: 220,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  endOfLine: 'auto',
  importOrder: ['^@/styles/(.*)$', '^@/components(.*)$', '^@/(.*)$', '^[./]', '^'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

module.exports = config
