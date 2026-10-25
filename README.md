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

Publicada en `weeks/week-02.html`. El contenido bilingüe está en `weeks/week-02-content.js` y la interacción de galerías, idioma y tema en `weeks/week-02.js`. Los recursos de imágenes se guardan en `images/week-02/`; se conservan las 14 imágenes originales del Word, además de las capturas del sitio. La galería de resultados de impresión vuelve a mostrar las cuatro fotografías originales; el funcionamiento tiene su propia foto junto a los pasos. El video `videos/abeja-cura-sin-audio.mp4` conserva la imagen del original y elimina físicamente la pista de audio. Los descargables están en `downloads/week-02/`: dos diseños F3D, dos G-code y el ZIP original. El contenido de los archivos se conserva idéntico al recibido. No se recibieron STL ni proyecto Cura. Los G-code indican máquina `Unknown`: no atribuirles un modelo exacto sin confirmación. Las galerías tienen ampliación y navegación con teclado.

La portada de la tarjeta de la semana 2 (`images/week-02/cover.png`) es una ilustración conceptual generada con IA para resumir la lluvia de ideas, CAD, impresión 3D y documentación web. La fotografía original de las abejas impresas permanece como evidencia dentro de la galería de la semana.

El apartado 3.3 de la semana 2 documenta ocho pasos de impresión con PLA en español e inglés. El modelo exacto sigue sin confirmar. El equipo confirmó las temperaturas de esta práctica con PLA: extrusor a 210 °C y cama a 60 °C. No deducir el modelo de una foto ni presentar estos valores como universales. Se consultaron las definiciones FLSUN QQ-S y V400 de Cura como referencias de configuración, no como identificación del equipo. La nota de ajustes de G-code proviene de la explicación del equipo; los archivos recibidos confirman calentamiento a 210 °C / 60 °C y capa nominal de 0,2 mm, pero no permiten identificar qué comandos fueron editados manualmente sin una versión anterior.

## Descargables al final de cada semana

Por indicación del equipo, los descargables y enlaces a pruebas online van siempre al final, después de la bibliografía. La semana 1 no tiene descargables. La semana 2 incluye una subsección «Descargables de software 2D y 3D» con cinco pruebas (DXF, DWG y F3D), el ZIP original renombrado y los enlaces de SketchUp y Tinkercad; sus archivos están en `downloads/week-02/software-2d-3d/`. Los diseños de los llaveros y G-code se agrupan aparte en la misma semana 2. El archivo identificado como Tinkercad en el ZIP tiene formato F3D; no cambiar su extensión ni presentarlo como formato nativo de Tinkercad. Mantener las descripciones en ES/EN y los archivos idénticos a los originales. La semana 2 sigue esta disposición al final de la página; la semana 1 no incluye sección ni carpeta de descargas.

La semana 2 incluye dos grupos claramente separados al final: software 2D/3D y enlaces online primero; diseños y G-code de impresión después. Hay accesos directos a ambos grupos desde el inicio de la página. Actualizar la versión en las URLs de `week-02-content.js` y `week-02.js` al publicar cambios para evitar que se usen copias antiguas del contenido desde la caché. La imagen completa de referencia de la impresora fue recibida en `MAQUINA 3D.zip` y se guarda sin modificar en `images/week-02/impresora-flsun.png`. Se muestra junto a los ocho pasos en español e inglés; las cuatro fotos originales de impresión permanecen en la galería de resultados.

El apartado 3.1 de la semana 2 incluye cuatro capturas originales recibidas en `DISEÑO Y MODELADO.zip`: boceto y modelo 3D de la abeja, y boceto y modelo 3D del casco espartano. Se conservan sin editar en los archivos `images/week-02/fusion-*.png`, con pies y textos alternativos ES/EN.
