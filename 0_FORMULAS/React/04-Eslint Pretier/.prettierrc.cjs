// semi: No añadimos punto y coma al final de las sentencias.
// singleQuote: Utilizamos comillas simples en lugar de comillas dobles.
// jsxSingleQuote: No utilizamos comillas simples en JSX.
// trailingComma: Añadimos una coma al final de las listas y objetos, ya que facilita la gestión de control de versiones.
// printWidth: Limitamos la longitud de línea a 80 caracteres.
// tabWidth: Configuramos la indentación con dos espacios.
// endOfLine: Configuramos el estilo de fin de línea para que sea automático.

module.exports = {
  semi: false, // Se desactiva el uso de punto y coma al final de las sentencias
  trailingComma: 'all', // Se asegura que haya una coma al final de listas y objetos
  singleQuote: true, // Se utiliza comillas simples
  printWidth: 80, // Se limita la longitud máxima de línea a 80 caracteres
  tabWidth: 2, // Se configura la indentación con dos espacios
  endOfLine: 'auto', // Se ajusta automáticamente según la plataforma
  jsxSingleQuote: false, // No se utilizarán comillas simples en JSX
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