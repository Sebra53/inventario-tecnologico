## Autor
sebastian bonilla
 
## Estado
Etapa inicial: frontend y backend creados

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


## tecnologias usadas
-git y github: control de versiones y ppublicacion de codigo

-my sql/my sql workbench almacenamiento base de datos y persistencia 

-vcode editor de codigo 

## requisitos 
-node js y npm

-my sql instalado

-git para clonar respositorio

-puertos 3000 y 5173 disponibles

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

## ejecucion
en 2 terminales diferentes

backend:
cd backend
npm install
Copy-Item .env.example .env
npm run start:dev

frontend

cd frontend
npm install
npm run dev

abrir http://localhost:3000 y http://localhost:5173 

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
