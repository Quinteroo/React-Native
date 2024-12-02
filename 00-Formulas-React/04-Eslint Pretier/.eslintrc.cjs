// env: Configuramos el entorno para el navegador, ES2021 y Node.js.
// extends: Utilizamos las configuraciones recomendadas de ESLint para JavaScript y React, y también incluimos la configuración de Prettier.
// parserOptions: Habilitamos las características de ECMAScript 2021 y JSX.
// plugins: Especificamos los plugins necesarios para React, importaciones y accesibilidad.
// rules: Desactivamos algunas reglas de React que podrían no ser necesarias y configuramos las reglas para ordenar las importaciones con simple-import-sort.
// settings: Configuramos la detección automática de la versión de React.


module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021, // Cambiado a 2021
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
    'import/resolver': {
      node: {
        paths: ['src'], // Rutas para resolver importaciones
        extensions: ['.js', '.jsx'], // Extensiones a considerar
      },
    },
  },
  env: {
    browser: true, // Indica que el código puede ejecutarse en un navegador
    es2021: true, // Indica que se siguen las especificaciones ES2021
    node: true, // Indica que el código puede ejecutarse en Node.js
  },
  extends: [
    'eslint:recommended', // Estándares recomendados de ESLint
    'plugin:react/recommended', // Estándares recomendados de React
    'plugin:jsx-a11y/recommended', // Estándares recomendados para accesibilidad en JSX
    'plugin:prettier/recommended', // Asegúrate de que esto sea siempre el último elemento en el array 
  ],
  plugins: [
    'react', // Plugin para React
    'jsx-a11y', // Plugin para accesibilidad en JSX
    'simple-import-sort', // Plugin para ordenar importaciones
    'prettier', // Plugin para integrar Prettier con ESLint
  ],

  //! Reglas de orden de importaciones usando simple-import-sort

  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Reglas para Prettier
    'react/react-in-jsx-scope': 'off', // Permitir JSX sin importar React en el ámbito
    'jsx-a11y/accessible-emoji': 'off', // Desactivar advertencias de emojis accesibles
    'react/prop-types': 'off', // Desactivar la validación de prop-types
    'simple-import-sort/imports': ['error', {
      groups: [
        // Ordena los módulos de Node.js y las dependencias de terceros
        ['^react', '^@?\\w'], // React primero, luego dependencias de terceros
        // Agrupa importaciones de módulos locales
        ['^\\./(?=([^/]+|$))'], // Importaciones locales en el mismo nivel
        ['^\\.\\./'], // Importaciones locales de niveles superiores
        // Ordena importaciones de estilos
        ['^.+\\.s?css$'], // Importaciones de CSS o SASS
      ],
    }], // Reglas para ordenar las importaciones
    'simple-import-sort/exports': 'error', // Reglas para ordenar las exportaciones
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'], // Permitir el uso de "Link" como un componente de ancla
        specialLink: ['hrefLeft', 'hrefRight'], // Especificar enlaces especiales
        aspects: ['invalidHref', 'preferButton'], // Asuntos de accesibilidad a considerar
      },
    ],
  },
};
