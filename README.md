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

La franja institucional usa los tres logos proporcionados por el equipo, guardados en `images/`. Se conservan los archivos originales, sus colores y proporciones. Los logos se integran en la misma barra azul de APIA y el menú, sin tarjetas ni franja adicional. Una presentación monocromática mediante CSS permite leerlos sobre azul; los archivos originales permanecen intactos.

## Documentación semanal publicada

La semana 1 está en `weeks/week-01.html`, con evidencias en `images/week-01/`. Su tarjeta en `index.html` abre esa página; las otras semanas conservan el panel de contenido pendiente. Para editar la semana 1 modifica directamente su HTML, no `entries`. El español es el idioma fuente. La semana 1 cuenta con traducción completa al inglés en `weeks/week-01-i18n.js`. El selector ES/EN cambia el contenido y conserva la preferencia al regresar al inicio. Las capturas de pantalla se mantienen como evidencias originales; sus pies y textos alternativos tienen traducción.

Los diagramas de flujo y Maslow se representan con HTML/CSS y texto accesible, sin dependencias externas. Los pictogramas son símbolos propios de identificación, no logos oficiales. Las citas numeradas enlazan a la bibliografía. El autor, enlace y licencia del conjunto de datos de Kaggle y la herramienta de IA usada en la ilustración conceptual quedan pendientes de identificación por el equipo. Los enlaces bibliográficos externos no pudieron comprobarse desde el entorno por restricciones de red.

La tarjeta de la semana 1 incluye `images/week-01/cover.png`: ilustración conceptual generada con IA para representar el aprendizaje de herramientas web, el desarrollo de la idea y el dosificador de miel. Es una portada ilustrativa y no evidencia de un prototipo construido. El texto alternativo se adapta al idioma seleccionado.

## Idiomas y alcance de la documentación

Todo texto nuevo se redacta primero en español y debe publicarse acompañado de su traducción al inglés: títulos, párrafos, tablas, diagramas, pies de figura y descripciones accesibles. Al editar la semana 1, actualiza también su diccionario de traducción y comprueba ES → EN → ES. Los títulos bibliográficos se conservan en su idioma de publicación. No añadir predicciones sobre el estado o los próximos pasos del proyecto a las semanas sin que el equipo las solicite; el apartado 6.4 fue eliminado por este motivo.

## Semana 2

Publicada en `weeks/week-02.html`. El contenido bilingüe está en `weeks/week-02-content.js` y la interacción de galerías, idioma y tema en `weeks/week-02.js`. Los recursos de imágenes se guardan en `images/week-02/`; la revisión de funcionamiento de la impresora muestra 19 figuras y conserva una sola foto de la máquina en ese apartado. El video `videos/abeja-cura-sin-audio.mp4` conserva la imagen del original y elimina físicamente la pista de audio. Los descargables de diseño e impresión están pendientes de recibir; añadir enlaces solo cuando existan los archivos y registrar el perfil de máquina para G-code. Las galerías tienen ampliación y navegación con teclado.

La portada de la tarjeta de la semana 2 (`images/week-02/cover.png`) es una ilustración conceptual generada con IA para resumir la lluvia de ideas, CAD, impresión 3D y documentación web. La fotografía original de las abejas impresas permanece como evidencia dentro de la galería de la semana.

El apartado 3.3 de la semana 2 documenta ocho pasos de impresión con PLA en español e inglés. El modelo exacto y las temperaturas de la práctica siguen sin confirmar: no deducirlos de una foto ni adoptar los ajustes de otro modelo. Se consultaron las definiciones FLSUN QQ-S y V400 de Cura como referencias de configuración, no como identificación del equipo. La nota de ajustes de G-code proviene de la explicación del equipo; los comandos concretos quedan pendientes de revisar al recibir los descargables.
