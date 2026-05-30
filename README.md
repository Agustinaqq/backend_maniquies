# Fábrica de Maniquíes - Backend Autónomo (Node.js + Express)

Este repositorio contiene la capa de lógica de negocio y servidor (**Backend**) para el sistema de gestión de la **Fábrica de Maniquíes**, desarrollado de forma modular, independiente y desacoplada de la interfaz de usuario.

Para cumplir con los requerimientos de la cátedra para esta fase de la entrega, el servidor ha sido configurado para operar en **Modo Autónomo**. Esto significa que expone una API REST real con persistencia de datos simulada en memoria (Arrays de JavaScript), permitiendo evaluar la lógica de las rutas y los controladores de forma totalmente independiente a la base de datos relacional.

---

## Endpoints Disponibles (API REST)

El servidor expone los siguientes endpoints en el puerto `3000` bajo el estándar JSON:

* **`GET /`**: Ruta raíz que devuelve el estado del servidor y confirma el modo de ejecución.
* **`GET /maniquies`**: Retorna el listado completo de los maniquíes almacenados temporalmente en la memoria del servidor.
* **`POST /maniquies`**: Recibe un objeto JSON en el cuerpo de la petición (`body`), valida los campos obligatorios y genera un nuevo registro asignándole un ID incremental de forma automática.
* **`DELETE /maniquies/:id`**: Busca un maniquí por su parámetro ID en la URL y, si existe, lo remueve de la colección temporal en memoria.

---

## Stack Tecnológico Utilizado

* **Node.js** (v22+) — Entorno de ejecución para JavaScript en el servidor.
* **Express.js** — Framework ágil para el ruteo y manejo de peticiones HTTP.
* **CORS Middleware** — Configurado globalmente para permitir conexiones seguras desde clientes externos (React/Vite, Postman o Thunder Client).

---

## Instrucciones para Ejecutar el Servidor Localmente

### 1. Clonar el repositorio
```bash
git clone [https://github.com/Agustinaqq/backend_maniquies.git](https://github.com/Agustinaqq/backend_maniquies.git)
cd backend_maniquies

2. Instalar las dependencias de Node.js
Este paso recreará la carpeta node_modules instalando los paquetes necesarios (express y cors) registrados en el archivo de manifiesto:

Bash
npm install

3. Levantar el servidor de desarrollo
Inicie el proceso principal de Node para poner a escuchar el servidor:

Bash
node server.js