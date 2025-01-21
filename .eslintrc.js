
    /*.eslintrc.js*/
    module.exports = {
        env: {
          browser: true,
          es2021: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:react/jsx-runtime', // Ajout pour React 18+
          'plugin:react-hooks/recommended', // Ajout explicite des hooks rules
          'plugin:@typescript-eslint/recommended',
          'prettier',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest', // Plus moderne que 12
          sourceType: 'module',
        },
        plugins: ['react', '@typescript-eslint', 'react-hooks'],
        rules: {
          'react/react-in-jsx-scope': 'off',
          'react-hooks/rules-of-hooks': 'error', // Vérifie les règles des Hooks
          'react-hooks/exhaustive-deps': 'warn', // Vérifie les dépendances des effets
          'react/prop-types': 'off', // Off car vous utilisez TypeScript
        },
        settings: {
          react: {
            version: 'detect',
          },
        },
      };
      