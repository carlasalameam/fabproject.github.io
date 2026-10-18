# APIA · Bitácora de fabricación

Primera propuesta de sitio para un equipo de cuatro integrantes y su proyecto de apicultura. APIA es un nombre provisional. No necesita instalar dependencias.

## Probar

Abre `index.html` en el navegador. También puedes ejecutar desde esta carpeta:

```sh
python3 -m http.server 8000
```

## Personalizar

- En `index.html`, busca `const copy` para editar los textos en español e inglés.
- Busca `const weeks` para editar las asignaciones propuestas. Confirma el calendario con tu laboratorio: esta lista es orientativa.
- Busca `const members` para añadir nombres, biografías y rutas de fotografías. Puedes crear una carpeta `images` junto a `index.html` y usar `photo: 'images/nombre.jpg'`.
- Busca `const entries` para añadir documentación semanal en español e inglés. Las tarjetas abren un panel con ese contenido; por ahora muestran apartados pendientes de completar.
- El idioma y el tema se recuerdan en el navegador cuando el almacenamiento está disponible. No se envían datos a servicios externos.

## Publicar después de revisar

Sube `index.html` y tus imágenes a la raíz del repositorio. En GitHub, abre Settings → Pages y configura Deploy from a branch → main → /(root). Este trabajo no publica ni activa GitHub Pages automáticamente.

La versión inicial usa ilustraciones SVG propias y marcadores para las fotografías. No contiene nombres, resultados ni avances inventados. Incluye controles de teclado, cierre de panel con Escape y respeta la preferencia de movimiento reducido.

## Foto grupal e instituciones

En `index.html`, edita `const groupPhoto = ""` y escribe la ruta de la foto de los cuatro integrantes, por ejemplo `images/equipo.jpg`. Añade ese archivo al repositorio. Las fichas individuales siguen configurándose en `members`.

La franja institucional usa los tres logos proporcionados por el equipo, guardados en `images/`. Se conservan los archivos originales, sus colores y proporciones. Los contenedores blancos limitan el espacio vacío de las imágenes para equilibrar su presentación en ambos temas.
