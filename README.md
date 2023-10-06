# [Prueba tecnica de bazar fullstack](https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/02-bazar-universal)

## Descripción
Esta repositorio contiene mi solucion a la prueba tecnica que consistia en la creación de un bazar con todo tipo de productos. En esto repositorio se recogen el tanto el front como el back de la aplicación web.

## Bazar-app

Esta carpeta recoge todo el codigo del front de la aplicación web.

### Tecnologias utilizadas

- [NextJs con app directory](https://nextjs.org/docs)
- React
- Tailwind

## Bazar-api

Esta carpeta rege todo el codigo del back de la aplicación web.

### Rutas

| Route               | Returns   |
| ------------------- | --------- |
| /api/items?q=:query | Product[] |
| /api/items/:id      | Product   |

### Tecnologias

- [Hono](https://hono.dev/)

## Instalación

1. Clonar el repositorio
   ```
   git clone https://github.com/JonAnderBeroz/bazar-libre.git
   ```
2. Navega a la carpeta bazar-api
    ```
    cd bazar-api
    ```
3. Instala las dependencias
   1. NPM
      ```
      npm install
      ```
   2. PNPM
      ```
      pnpm install
      ```
4. Ejecuta el proyecto
   1. NPM
      ```
      npm run dev
      ```
   2. PNPM
      ```
      pnpm run dev
      ```
5. Navega a la carpeta bazar-app
    ```
    cd ..
    cd bazar-app
    ```
6. Instala las dependencias
    1. NPM
        ```
        npm install
        ```
   2. PNPM
      ```
      pnpm
      ```
7. Crear archivo .env.local e introducir el siguiente valor:

    ```
    API_ENDPOINT = "127.0.0.1:8787"
    ```

8.  Ejecuta el proyecto
     1. NPM
        ```
        npm run dev
        ```
       1. PNPM
          ```
          pnpm run dev
          ```

Visita  http://localhost:3000  en tu navegador para ver la aplicación en funcionamiento.