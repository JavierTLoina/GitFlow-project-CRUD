# 2024-0172 Mi Proyecto con Git Flow

Este repositorio contiene la implementación de una aplicación CRUD (Crear, Leer, Actualizar, Borrar) desarrollada para demostrar un manejo estricto y riguroso del flujo de trabajo Git Flow.

## Tecnologia Utilizada
- **`React + TS + SCSS + Vite`**

## Metodología Implementada

El desarrollo se ha basado en la metodología **Git Flow**, utilizando las siguientes ramas principales y de soporte:

- **`main`**: Rama de producción estable.
- **`develop`**: Rama de integración principal para el desarrollo continuo.
- **`qa`**: Rama de Calidad/Staging para pruebas antes de producción.
- **`feature`/** Ramas de corta duración para nuevas funcionalidades y correcciones.

## Estructura de Features

El proyecto se construyó a través de la integración de 5 Features principales, cada una pasando por 3 Pull Requests (`feature/X -> develop`, `feature/X -> qa`, `feature/X -> main`) para garantizar el control de versiones:

1.  **Feature 1:** `feature/setup-data-model` (Configuración de la Base de Datos y Modelo)
2.  **Feature 2:** `feature/create-new-user` (Implementación de la función C - Crear)
3.  **Feature 3:** `feature/read-user-list` (Implementación de la función R - Leer)
4.  **Feature 4:** `feature/update-user-status` (Implementación de la función U - Actualizar)
5.  **Feature 5:** `feature/delete-user-record` (Implementación de la función D - Borrar)

   ## Cómo Ejecutar el Proyecto

Para clonar y correr el proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el Repositorio:**
    ```bash
    git clone [https://github.com/JavierTLoina/GitFlow-project-CRUD.git](https://github.com/JavierTLoina/GitFlow-project-CRUD.git)
    cd GitFlow-project-CRUD
    ```

2.  **Instalar Dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el Servidor de Desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en la URL que se muestre en tu terminal (ej: `http://localhost:5173/`).
