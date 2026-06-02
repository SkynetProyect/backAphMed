# backAphMed

Descripción
-
API backend para la aplicación clínica. Implementada con Node.js + TypeScript y arquitectura por capas (Domain, Application, Infrastructure).

Acceso a la documentación (Swagger)
-
- URL de Swagger UI: http://localhost:3000/apidocs
- Generación: `swagger-jsdoc` lee los comentarios JSDoc en `./src/infrastructure/entrypoint/router/*.ts` y expone la especificación OpenAPI.

Rutas principales y métodos expuestos (ejemplos)
-
- `/categorias`:
	- `GET /categorias` — Obtener todas las categorías
	- `GET /categorias/{id}` — Obtener categoría por id
	- `POST /categorias` — Crear categoría
	- `PUT /categorias/{id}` — Actualizar categoría
	- `DELETE /categorias/{id}` — Eliminar categoría
- `/doctores` — endpoints CRUD para doctores (mismos métodos REST básicos)
- `/documentos` — manejo de documentos (subida/descarga, revisión en handlers)
- `/imagenes` — manejo de imágenes (subida/descarga)
- `/pacientes` — endpoints CRUD para pacientes
- `/procedimientos` — endpoints CRUD para procedimientos
- `/tipocedulas` — endpoints para tipos de cédula
- `/videos` — manejo de videos (subida/descarga)

Seguridad
-
- Antes de los routers se aplican `jwtGuard` y `roleGuard` en [index.ts](index.ts) — la mayoría de las rutas requieren el header `Authorization: Bearer <token>`.

Cómo ejecutar (desarrollo)
-
1. Instalar dependencias:

```
cd back
npm install
```

2. Levantar en modo desarrollo:

```
npm run dev
```

La API por defecto escucha en el puerto `3000`.

Dependencias principales (con versiones)
-
- `express` — ^5.2.1
- `typeorm` — ^0.3.28
- `pg` — ^8.20.0
- `swagger-jsdoc` — ^6.2.8
- `swagger-ui-express` — ^5.0.1
- `socket.io` — ^4.8.3
- `jsonwebtoken` — ^9.0.2
- `multer` — ^2.1.1
- `class-transformer` — ^0.5.1
- `class-validator` — ^0.15.1
- `reflect-metadata` — ^0.2.2
- `dotenv` — ^17.4.2
- `uuid` — ^8.3.2

Dependencias de desarrollo
-
- `typescript` — ^6.0.3
- `ts-node` — ^10.9.2
- tipos para Express/JWT/Multer/Swagger en `@types/*` según `package.json`.

Arquitectura
-
- Organización por capas siguiendo un estilo DDD/hexagonal:
	- `src/domain` — modelos, interfaces y gateways por entidad
	- `src/application/usecase` — lógica de negocio / casos de uso
	- `src/infrastructure/adapter` — adaptadores, por ejemplo PostgreSQL con TypeORM
	- `src/infrastructure/entrypoint` — routers, handlers, middlewares (entrada HTTP)

Notas
-
- La documentación Swagger se construye a partir de los comentarios JSDoc en los routers.
- Algunas rutas de subida (imagenes, documentos, videos) requieren configuración adicional para storage (filestorage) antes de persistir en la DB.
- Compruebe `src/infrastructure/entrypoint/middleware/swagger.ts` para cambiar servidores o metadata del API.

