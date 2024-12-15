

//! EXPO
// Expo al ser un framework nos permite más cosas que solo con react native
//? https://docs.expo.dev/

1 // create a proyect (lateral)
2 // clicar en //* --template
3 // usuarlemten emplearemos //* default o blank

//! Crear Proyecto
4 // navegamos hasta la carpeta de proyectos de React Native
5 // ejecutamos el código //* npx create-expo-app@latest testing-app --template blank-typescript
6 // esto empieza a descargar e instalar las dependencias en el proyecto
7 // nombramos a la carpeta //* 02-testing-app
8 // una vez instalada dependencias abrimos en vsCode el proyecto


//! revisar proyecto
9 // podemos ver que se ha creado el proyecto, y en //* App.tsx ya tenemos código
10 // en el package.json tenemos los scipts que lanzan la app
11 //para arrancar la app //* npm start
12 // la terminal nos lanza un código QR y varias formas de renderizar los emuladores
13 // escaneamos en código QR (debemos estar en la misma red wifi) //* desde Expo App en nuestro móvil
14 // si hacemos cambios en el códgio podemos ver que el hotreload es instantáneo tb en nuestro tlfn


//! instalar emulardorores en Windows
//? https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated&mode=expo-go
15 // tenemos que tener descargado Android Studio
16 // abrimos Android Studio y procedemos a configurar
17 // More Actions > SDK Manager
17.1 // copiamos la Android SDK Location //* C:\Users\ferna\AppData... (dirección)\Local\Android\Sdk
17.2 // guardamos el SDK que usaremos en una variables de entorno para usar con las DevTools
18 // SDK Platformns > Android 14.00
19 // SDK Tools > marcamos //* Android Emulator Android SDK Platform-Tools
20 // Android SDK Build-Tools 35, si ampliamos marcamos solo 34.0.0
21 // Clicamops //* Apply
22 // esperamos a instalar todo las dependencias
23 // finish y Ok

24 // abrimos el buscador de la barra de herramientas del escritorio
25 // bucamos //* edit the system environment variables
26 // Clicamos Enviorenment Variables
27 // ANDROID_HOME > Variable value //* colocamos la Android SDK Location
28 // Ok > Ok

29 // abrimos una nueva powerShell (terminal)
30 // pegamos el comando, que viene en la doc //* Get-ChildItem -Path Env:
31 // Comprobar que aparece ANDROID_HOME

//! actualizar los PATH
32 // abrimos explorador de Windows y pegamos la Android SDK Location
33 // buscamos el platform-tools
34 // copiamos la dirección de carpetas que acabe en \platform-tools
35 // buscador del escriotio //* edit environment variables
36 // Environment Variables > Sytem variables (segundo cuadro) > Path
37 // si no tenemos el Path podemos crearlo, si lo tenemos damos a editar
38 // pegamos el enlace reciencopiado del directorio ...\platform-tools
39 // Ok Ok
40 // nueva terminal //* adb --version
41 // nos tiene que dar una respuesta la terminal 




