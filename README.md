## Autor
sebastian bonilla
 
## Estado
Etapa inicial: frontend y backend creados

commmit 2: my sql
commit 3: crud, endppoints
commit 4: conexion frontend y backend
-commit 5: pruebas y evidencia

estructura base del proyecto

## IA (uso de chatgpt)
-uso en forma de guia para .gitignore

-para commit de git

-creacion de la base de datos

-ayuda orden con el proyecto

-ayuda solucion de error con import { AppModule, ObserveInstrument } from './app.module';

-ayuda con adaptacion (correccion de nombres) de codigo de referencia 
(actividades 10, 11, 13, 14)

-generacion datos de prueba para postman

-ayuda funcionamiento(error de tipeo)

-diseño

-arreglo de distribucion del navbar

-generacion 5 dtos para rellenar bbase de datos

-solucion requisito fecha valida

-endpoints readme




## tecnologias usadas
-git y github: control de versiones y ppublicacion de codigo

-my sql/my sql workbench almacenamiento base de datos y persistencia 

-vcode editor de codigo 

-frontend: vue, vite, js, html, css

-backend: nestjs, ts, typeorm

## requisitos 
-node js y npm

-my sql instalado

-git para clonar respositorio

-puertos 3000 y 5173 disponibles

## Estructura
```text
inventario-tecnologico/
  backend/
    src/equipos/
      dto/
	créate-equipo.dto.ts
	update-equipo.dto.ts
      entities/
	equipo-entity.ts
      equipos.controller.ts
      equipos.service.ts
      equipos.module.ts
    src/app.module.ts
    src/main.ts
    .env.example
  frontend/
    src/components/
EquipoFormulario.vue
Navbar.vue
    src/views/
	EquipoDetalleView.vue
	EquipoView,vue
	NuevoEquipoView.vue
    src/services/equiposService.js
    src/router/index.js
    src/App.vue
    src/main.js
    src/style.css
  database/
    crear-base.sql
    pruebas.sql
    
  README.md
```

## endpoints

| Método | Ruta | Función |
|---|---|---|
| GET | /equipos | Listar equipos |
| GET | /equipos/:id | Consultar un equipo |
| POST | /equipos | Crear un equipo |
| PATCH | /equipos/:id | Actualizar campos de un equipo |
| DELETE | /equipos/:id | Eliminar un equipo |


## base de datos
CREATE DATABASE IF NOT EXISTS inventario_tecnologico

CHARACTER SET utf8mb4

COLLATE utf8mb4_unicode_ci;

USE inventario_tecnologico;

configurar .env con variables de entorno

type orm crea tabla equipo mediante synchronize

comprobacion de tabla:


USE inventario_tecnologico;

SHOW TABLES;

DESCRIBE equipos;


## variables de entorno
DB_HOST=localhost

DB_PORT=3306

DB_USER=root

DB_PASSWORD=CAMBIAR

DB_NAME=inventario_tecnologico

PORT=3000

## ejecucion e instalacion

clonar github:

ejecutar database/crear-base.sql

en 2 terminales diferentes



backend:

cd backend

npm install

Copy-Item .env.example .env (configurar variables de entorno de mysql)

npm run start:dev


frontend

cd frontend

npm install

npm run dev

abrir http://localhost:3000 y http://localhost:5173 

si se requiere ejecutar PRUEBAS.sql para rellenar con datos

## pruebas


POST   http://localhost:3000/equipos

{
  "codigoInventario": "EQ-TEST-001",
  "nombre": "Notebook de prueba",
  "tipo": "Notebook",
  "marca": "Lenovo",
  "modelo": "ThinkPad E14",
  "ubicacion": "Laboratorio 1",
  "estado": "Disponible",
  "fechaAdquisicion": "2025-03-10",
  "observaciones": "Registro temporal para probar el CRUD."
}


GET    http://localhost:3000/equipos
GET    http://localhost:3000/equipos/ID
PATCH  http://localhost:3000/equipos/ID

{ "ubicacion": "Sala 202" }

DELETE http://localhost:3000/equipos/ID
reinicio del backend antes del delete para comprobar persistencia


revison de la base de datos manualmente

todas las pruebas positivas

## pruebas de los requisitos pedidos y otros (carpeta evidencias)

-confirmacion_eliminar: mensaje de confirmacion al eliminar

-endpoint_id: http://localhost:5173/equipos/ID funcional

-valida fecha: fecha valida 

-sql: tabla poblada

-error registro: minimo de caracteres lara nombre y codigo

-estados: estados solicitados

-campo_obligatorio: mensaje por campo obligartorio no rellenado

-buscador y buscador 2: buscar funciona con cualquier variable

-registro: exito al registrar

-backend y backend funcional muestran exito al ejecutar el backend

-frontend exito con el frontend