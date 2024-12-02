
> CÓMO HACER UN DEPLOY DE NUESTRA APP:  VITE > GIT > GITHUB > NETLIFY


# 1. VITE - creamos el proyecto con vite
// abrimos terminal de control del ordenador 
// nos situamos en el escritorio para crear la carpeta ahí
cd Desktop

//creamos el proyecto con vite
npm create vite@latest

// escribimos nombre archivo
? Project name: › ejemplo-vite

// seleccionamos lenguaje
✔ Project name: … ejemplo-vite
✔ Select a framework: › vanilla
✔ Select a variant: › JavaScript

// abrimos la carpeta en VSCODE y abrimos terminal

// metemos los siguientes comandos de uno en uno
npm install     //Instalamos las dependencias del package.json

npm run dev     //Arrancamos el servidor

// se genera un host local para visualizar la app
http://127.0.0.1:5173/ 

> copiamos assets y  SRC en la carpeta Public



# 2. una vez terminado el proyecto hacemos el build en vite para optimizarlo
// introducimos en la terminal
npm run build

// se general la carpeta DIST > versión minificada del proyecto <<<<<<<<<<< NO MODIFICAR >>>>>>>>>>>
> ejemplo-vite@0.0.0 build
> vite build

vite v3.0.4 building for production...
✓ 6 modules transformed.
dist/assets/javascript.8dac5379.svg   0.97 KiB
dist/index.html                       0.44 KiB
dist/assets/index.d0964974.css        1.19 KiB / gzip: 0.62 KiB
dist/assets/index.1917c8b0.js         1.41 KiB / gzip: 0.74 KiB


// podemos tener un nuevo local host para ver la versión en el navegador
npm run preview





# 3. GIT - CREAR VERSIÓN EN LA MEMORIA VIRTUAL DEL ORDENADOR     https://www.youtube.com/watch?v=L_lWQZNhN7w

// una vez instalado GIT en el ordenador, escribimos en la terminal de VSCODE para verificar la versión
git version

// registramos usuario
git config --global user.name "mi nombre"

git config --global user.email "myemail@example.com"  // << usar el mismo email que github para poder enlazar después ambas tecnologías>>


// Iniciar un nuevo repositorio
// Crear la carpeta oculta .git
// Solo se ejecuta una vez por proyecto
git init    << creamos el repositorio virtual>>

// Agregar todos los archivos para que esté pendiente de los cambios
git add .      << añadimos el repositorio >>    << escribimos este código cuando hemos hecho modificaiciones en el código y queremos actualizarlo>>


// Crear commit (fotografía del proyecto en ese momento)
git commit -m "primer commit"      << damos nombre a esta primera versión del repositorio >>  << hay que escribirlo en cada moficicaión>>


// Muestra la lista de commit del mas reciente al más antigüo
git log --oneline    << si tenemos alguna duda de cuantas versiones hemos creado nos las muestra>>


// si modificamos el archivo y queremos subir la actualizaión a github, después de git add. y git commit -m "versión commit"
> git push




# 4. GITHUB - CREAMOS NUEVO REPOSITORIO
El objetivo es subir a un nuevo repositorio todos los archivos a través de git para tener el proyecto tal y como está en la
carpeta raíz creada por Vite. Para ello haremos un commit de con todos los ficheros y carpetas (gitignore se encargará de 
no subir la carpeta node_modules) y hacer un push a la rama principal.

// añadimos a la terminal del proyecto los códigos uno a uno aportados por github

//…or push an existing repository from the command line
git remote add origin https://github.com/Quinteroo/ejemploooo.git
git branch -M main
git push -u origin main


>> SUBIR NUEVAS VERSIONES A GITHUB DEL PROYECTO
git add forntend/ backend/
git commit -m "fear: lo que sea que haya que especificar"
git push origin main

>> DESCARGAR CÓDIGO DE GITHUB PARA NO TENER PROBLEMAS CON LAS VERSIONES
git pull origin main



# 5. NETLIFY - DEPLOY DEL PROYECTO
// Vamos a loguearnos con GitHub y autorizar a Netlify para que pueda acceder a todos nuestros repositositorios,

// New site

// Github

// Buscamos nuestro repositorio con el proyecto que hemos subido anteriormente.

// rellenamos 

> rama - es la principal de nuestro negocio (viene por defecto)

> directorio base - no ponemos nada

> build - npm run build, por lo que no hace falta que modifiquemos lo que nos indica por defecto.

> dist - no necesitamos modificar el valor de este campo



# FIN