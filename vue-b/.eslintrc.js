// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // root: true,
  parser: 'babel-eslint',
  // parserOptions: {
  //   sourceType: 'module'
  // },
  globals: {
    'JSEncrypt': true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ["eslint:recommended"],
  // required to lint *.vue files
  plugins: [
    'html','vue'
  ],
  // add your custom rules here
  rules: {
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号  
    "comma-dangle": ["error", "never"], 
    "no-empty": 2, 
    "no-multi-spaces": 2, 
    "no-mixed-spaces-and-tabs": [2,"smart-tabs"],
    "no-trailing-spaces": 2,
    "padded-blocks": [2,"never"],
    "quotes": ["error", "single"],
    "no-console": 2, 
    "no-extra-semi": 2, 
    "indent": ["error", 2, { "SwitchCase": 1 }], 
    // 双峰驼命名格式  
    "camelcase": [2,{"properties": "never"}],
    "key-spacing": [2,{"beforeColon": false, "afterColon": true}],
    "space-before-function-paren":[
      2,
      {"anonymous": "never","named": "never"}
    ],
    "newline-after-var": 0,
    "no-inline-comments": 2,
    "no-multiple-empty-lines": [2, { "max": 2 }],
    "semi": [2, "never"], 
    "no-var": 0,
    "no-redeclare": 1  
    // allow async-await
    // 'generator-star-spacing': 'off',
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
