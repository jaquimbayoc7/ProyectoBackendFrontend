<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" style="margin-right: 20px"/>
  <img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feibm96k9y07irdwu0wlj.png" width="180" alt="Next.js Logo"/>
</p>

<p align="center">Proyecto Full Stack con <a href="http://nestjs.com" target="_blank">NestJS</a> en el backend y <a href="https://nextjs.org" target="_blank">Next.js</a> en el frontend</p>

<p align="center">
<a href="https://github.com/jaquimbayoc7/ProyectoBackendFrontend/stargazers"><img src="https://img.shields.io/github/stars/jaquimbayoc7/ProyectoBackendFrontend" alt="Stars" /></a>
<a href="https://github.com/jaquimbayoc7/ProyectoBackendFrontend/network/members"><img src="https://img.shields.io/github/forks/jaquimbayoc7/ProyectoBackendFrontend" alt="Forks" /></a>
<a href="https://github.com/jaquimbayoc7/ProyectoBackendFrontend/issues"><img src="https://img.shields.io/github/issues/jaquimbayoc7/ProyectoBackendFrontend" alt="Issues" /></a>
<a href="https://github.com/jaquimbayoc7/ProyectoBackendFrontend/blob/main/LICENSE"><img src="https://img.shields.io/github/license/jaquimbayoc7/ProyectoBackendFrontend" alt="License" /></a>
</p>

## 📋 Descripción del Proyecto

Este proyecto es una aplicación full stack que combina un backend potente desarrollado con NestJS y un frontend moderno construido con Next.js. La aplicación está diseñada para ser escalable, mantenible y de alto rendimiento, siguiendo las mejores prácticas de desarrollo.

## 🚀 Estructura del Proyecto

El repositorio está organizado en dos carpetas principales:

- **portfolio-backend**: API RESTful desarrollada con NestJS y TypeScript
- **portfolio-frontend**: Interfaz de usuario desarrollada con Next.js

## ⚙️ Backend (NestJS)

### Características principales

- Arquitectura modular basada en NestJS
- Implementación de API RESTful
- Validación de datos y manejo de errores
- Autenticación y autorización
- Conexión a base de datos con Prisma ORM
- Pruebas unitarias y de integración

### Configuración del backend

```bash
# Navegar al directorio del backend
$ cd portfolio-backend

# Instalar dependencias
$ npm install

# Ejecutar migraciones de base de datos
$ npx prisma migrate dev

# Iniciar en modo desarrollo
$ npm run start:dev

# Compilar para producción
$ npm run build

# Ejecutar en modo producción
$ npm run start:prod
```
### Ejecutar pruebas
```bash
# Pruebas unitarias
$ npm run test

# Pruebas e2e
$ npm run test:e2e

# Cobertura de pruebas
$ npm run test:cov
```
## 🎨 Frontend (Next.js)
Características principales
- Framework React con renderizado del lado del servidor (SSR) y generación estática (SSG)
- Optimización automática de imágenes y fuentes
- Enrutamiento basado en el sistema de archivos
- API Routes para endpoints serverless
- Soporte para TypeScript
- Diseño adaptable para dispositivos móviles
  
### Configuración del frontend
```bash
# Navegar al directorio del frontend
$ cd portfolio-frontend

# Instalar dependencias
$ npm install

# Iniciar en modo desarrollo
$ npm run dev

# Compilar para producción
$ npm run build

# Iniciar en modo producción
$ npm start
```
## 🐳 Docker
El proyecto incluye configuración Docker para facilitar el despliegue y la gestión de la base de datos PostgreSQL:
```bash
# Iniciar todos los servicios
$ docker-compose up

# Iniciar en modo detached
$ docker-compose up -d

# Detener todos los servicios
$ docker-compose down
```
### Configuración de la base de datos
La base de datos PostgreSQL se ejecuta en un contenedor Docker, lo que facilita el desarrollo y las pruebas. La configuración se encuentra en el archivo docker-compose.yml:
```bash
version: '3.8'
services:
  postgres:
    image: postgres:14
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: portfolio
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```
## 💻 Tecnologías Utilizadas
### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL (en Docker)
- Jest (para pruebas)
- Docker

### Frontend
- Next.js
- TypeScript
- React
- SWR/React Query para gestión de datos
- Styled Components/Tailwind CSS
- Jest y React Testing Library

## 📝 Requisitos
- Node.js (v14 o superior)
- npm o yarn
- Docker y Docker Compose

## 🤝 Contribución
Si deseas contribuir a este proyecto, por favor:

- Haz un fork del repositorio
- Crea una rama para tu característica (git checkout -b feature/amazing-feature)
- Haz commit de tus cambios (git commit -m 'Add some amazing feature')
- Haz push a la rama (git push origin feature/amazing-feature)
- Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 📞 Contacto
- Desarrollador: Ing. Julian Quimbayo Castro
- GitHub: @jaquimbayoc7
- Proyecto: ProyectoBackendFrontend
