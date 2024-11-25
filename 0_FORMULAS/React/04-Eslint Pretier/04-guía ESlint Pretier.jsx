
//! PASOS PARA CONFIGURAR ESLINT & PRETIER



//! slint & Prettier
// To do proyecto que se precie debe tener una configuración previa en la que indique al resto de los
// integrantes del equipo de desarrollo cómo deben indentar el código o beutificación de este.

// Por ello vamos a construir un //*Boilerplate.


//! Proyecto Vite
// El primer paso como no podía ser otro será crear un proyecto con Vite, tal y como hemos ido haciendo hasta ahora.

//* npm create vite@latest





//! Instalación de dependencias
// Vamos a instalar una serie de paquetes en nuestro proyecto que nos ayude en nuestro día a día como desarrolladores.
// Todas ellas son dependencias de desarrollo es decir dev-dependencies.

//* npm i -D eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort pre-commit prettier
//? https://images.thepowermba.com/production/7714d6a1-0313-4ca4-9a78-efcd0628cfd4.png


//! Modificación package.json
// En nuestro fichero encargado de gestionar las dependencias tenemos que añadir los scripts de ejecución
// y además //* indicar qué queremos tener antes del commit lanzar el lint.

`{
  "name": "react-eslint-prettier",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "lint:fix": "eslint ./src --ext .jsx,.js, --quiet --fix --ignore-path ./.gitignore",
    "lint:format": "prettier  --loglevel warn --write \"./**/*.{js,jsx,css,md,json}\" ",
    "lint": "npm run lint:format && npm run lint:fix "
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "eslint": "^8.8.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "pre-commit": "^1.2.2",
    "prettier": "^2.5.1",
    "vite": "^3.1.0"
  },
  "pre-commit": "lint",
  "license": "MIT"
}`


  //! Recordad 
  // eliminar el type: module del package.json



  //! Eslint 
  // es una herramienta de software que revisa y "observa" tu código en busca de errores que puedan afectar tu código.
  // Algunos "linteres" incluso pueden darte sugerencias de como arreglar el error o incluso arreglarlo ellos mismos.

  //? https://eslint.org/

  // En nuestro caso //* a la altura de nuestra raíz generamos un fichero .eslintrc.cjs 
  // y le damos //* el formato 
  //que queramos, en nuestro caso.

  `
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
`

  //! IGNORAR
  // Después definimos en un fichero qué carpetas o ficheros queremos ignorar y no pasar nuestro lintado.
  // Para ello creamos un //* .eslintignore


  //! Prettier
  // Prettier es un formateador automático de código. Es decir al trabajar en un proyecto de código que 
  // incluya a más de una persona estas discusiones sobre como debería escribirse o no el código (guía de estilo) 
  // pueden mermar la productividad del equipo enfrascándose en nimiedades que pueden tornarse bastante molestas, 
  // por ejemplo, al revisar un pull-request.


  // Por ello vamos a crear un fichero //* .prettierrc.cjs.
  // Os dejamos comentadas distintas opciones que activar o desactivar que alterarán el comportamiento de 
  // Prettier en nuestro proyecto:

  `
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 90,
  tabWidth: 2,
  endOfLine: 'auto',
};

// {
//   "arrowParens": "always",
//   "bracketSpacing": true,
//   "embeddedLanguageFormatting": "auto",
//   "htmlWhitespaceSensitivity": "css",
//   "insertPragma": false,
//   "jsxBracketSameLine": false,
//   "jsxSingleQuote": false,
//   "proseWrap": "preserve",
//   "quoteProps": "as-needed",
//   "requirePragma": false,
//   "semi": true,
//   "singleQuote": false,
//   "tabWidth": 2,
//   "trailingComma": "es5",
//   "useTabs": false,
//   "vueIndentScriptAndStyle": false,
//   "printWidth": 100
// }
`



  //! IGNORAR 
  // También vamos a crear un fichero indicando las carpetas o documentos que queremos ignorar en //* .prettierignore:


  //! PUESTA A PUNTO
  //? https://images.thepowermba.com/production/c0dd8254-1019-4ec6-96cd-8e4dd38f14c8.gif

  //* npm run lint


  //!Integración con VSCode
  // Vamos a personalizar la configuración de VSCode para implementar la ejecución de ESLint y la aplicación de 
  // formato al código al guardar un archivo.

  // A continuación:

  //* 1 
  // Verifica la presencia de la extensión ESLint en nuestro VSCode y, en caso de no tenerla, instálala.

  //* 2
  // Abriremos preferencias de VSCode y haremos click en el primer icono situado en la esquina superior derecha 
  // para editar el fichero settings.json y añadimos lo siguiente:

  // Si ya hemos configurado VSCode para que formatee automáticamente nuestro código al guardar un archivo 
  // mediante la opción "editor.formatOnSave", será necesario desactivar esta función específicamente para JavaScript y JSX.

  // ESLint se encargará de este proceso.

  // Abre las preferencias de VSCode.

  // Busca la configuración de formato específica para JavaScript y JSX en el archivo settings.json.

  // Desactiva la opción "editor.formatOnSave" para estos casos.

  // Por ejemplo, puedes añadir las siguientes líneas al archivo settings.json:

  `
{
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  }
}
`
















