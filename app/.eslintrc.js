module.exports = {
    root: true, // .eslintrc.jsがプロジェクトのルートに配置させているか（指定がないと上位階層へ設定ファイルを探索される）
    parser: '@typescript-eslint/parser', // ESLintにTypeScriptを理解させる
    parserOptions: {
      project: 'app/tsconfig.json', // tsconfig.jsonの場所を指定
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint', // ESLintのTypeScriptプラグインのルールを適用できる様にする（/eslint-pluginは省略可）
      'prettier',
    ],
    extends: [
      'eslint:recommended', // ESLintのJavaScriptルールセットを適用
      'plugin:@typescript-eslint/eslint-recommended', // eslint:recommendedに含まれるルールを型チェックでカバーできるものは無効化
      'plugin:@typescript-eslint/recommended', // 型チェックが不要なルールを適用
      'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型チェックが必要なルールを適用
       //'prettier/@typescript-eslint', // Prettierでカバーできるルールを無効化(eslint 8.x以上では不要とのことhttps://qiita.com/yuma-ito-bd/items/cca7490fd7e300bbf169)
       //'plugin:prettier/recommended' // Prettierのお勧めルールセットを適用(https://dev.classmethod.jp/articles/eslint-and-prettier/)
       'prettier'
    ],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    env: {
        node: true,
        jest: true,
    },
  }