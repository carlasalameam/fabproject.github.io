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

## Semana 2: herramientas de diseño digital

`weeks/week-02.html` contiene exclusivamente clasificación y prácticas de AutoCAD, LibreCAD, QCAD, Fusion, Tinkercad y SketchUp Web. Son tres herramientas de CAD 2D y tres de modelado 3D; no incluir Paint, GIMP, Photoshop o Inkscape como prácticas realizadas. Raster se explica como categoría, sin inventar una actividad no documentada. La tabla distingue dimensiones, tipo de representación y formato editable. Las cuatro capturas CAD de abeja y casco permanecen aquí; sus fotografías de fabricación pertenecen a la semana 3. La portada generada representa diseño 2D/3D, no una evidencia de trabajo.

## Descargables al final de cada semana

Los descargables y enlaces online van al final, después de la bibliografía. La semana 2 conserva las cinco pruebas de software, el ZIP original y los enlaces de SketchUp y Tinkercad. El F3D identificado originalmente como Tinkercad es un archivo de Fusion: no cambiar su extensión ni presentarlo como formato nativo de Tinkercad. Los diseños de llaveros y G-code se muestran en la semana 3, junto al OBJ/MTL del escaneo en un grupo separado. Se mantienen las rutas originales de los archivos para conservar enlaces y bytes. La semana 1 enlaza expresamente al ZIP actual del repositorio completo; no es un archivo histórico exclusivo de esa práctica. Cambiar la versión de las URLs JS cuando se publique contenido.

## Navegación de semanas

`site-navigation.js` comparte el enlace «Semanas / Weeks» del menú y los botones de semana anterior/siguiente. Añadir una semana a `publishedWeeks` solamente cuando exista su página publicada. En los extremos se muestra un control inactivo; no se enlaza a semanas sin contenido. Cada página semanal incluye `.week-pagination` con `data-week` y carga `site-navigation.css` y `site-navigation.js` después de su propio selector de idioma. La navegación respeta la elección ES/EN y el tema.

## Alineación de textos e imágenes

En los bloques de dos columnas `.evidence`, centrar siempre verticalmente el texto y la galería entre sí: el contenido más corto queda centrado respecto al más largo. Los párrafos conservan la alineación izquierda para lectura. Este criterio compartido está en `site-navigation.css` y se aplica a ambas semanas y a las futuras páginas que carguen ese archivo. La imagen de la impresora no es fija al desplazarse para mantener esa misma alineación. En celular se conserva el orden apilado.

## Enfoque de la página de inicio

El inicio y «Sobre nuestro proyecto» presentan el aprendizaje semanal y los diferentes usos de la fabricación digital; no limitar la bitácora a las abejas. El proyecto final se presenta como una aplicación de esos conocimientos: idea inicial de un dosificador de miel para facilitar la manipulación y el envasado. No afirmar que la solución ya esté validada. Mantener estas descripciones y el cuaderno inicial del proyecto en español e inglés.

Tono editorial: usar títulos y descripciones directos, descriptivos y técnicos. Evitar eslóganes poéticos y no introducir la página con «Somos un equipo de cuatro integrantes». El encabezado principal es «Fabricación digital / Digital fabrication».

## Integrantes

Las fotos y nombres de `EQUIPO.zip` están publicados en el orden Carla Salamea Matovelle, Diego Minchalo Cabrera, Camila Aguirre Mendieta y Steven Aucapiña Lozada. Todos comparten el rol «Desarrollo e investigación» y la descripción «Estudiante de sexto ciclo de Ingeniería Industrial». Las tareas en `members` incluyen diseño/fabricación digital, generación de ideas y toma de decisiones para todos, más las tareas específicas indicadas por el equipo. Mantener ES/EN y este orden. Las imágenes originales están en `images/team/` sin modificaciones; el encuadre se controla con CSS. La foto grupal sigue pendiente.

Los cuatro perfiles deben mantener seis tareas cada uno en ambos idiomas. Carla y Steven también incluyen documentación semanal y registro fotográfico. La responsabilidad principal de Diego se expresa dentro de la tarea de diseño/fabricación digital para evitar duplicarla.

## Semana 3: impresión y escaneo 3D

El usuario confirmó 3.1 Impresión PLA (llaveros y voladizos) y 3.2 Escáner CR-SCAN 01 (apartados a–h). La impresión se trasladó desde la semana 2 conservando fotografías, video sin audio, pasos de uso, parámetros verificados del G-code y archivos originales. El perfil `flsun_v400` identifica el perfil de Cura, no prueba el modelo físico. Las temperaturas confirmadas son 210 °C y 60 °C; no son universales. No atribuir comandos a edición manual sin una versión anterior comparable.

El escaneo conserva seis fotos originales y la captura final. OBJ y MTL se mantienen sin modificar; conservar juntos los nombres para que el OBJ encuentre el material. Se añade la distinción entre malla cerrada y sólido CAD, comparación resina/PLA y un flujo general de seguridad y posprocesado. No afirmar una impresión en resina ya documentada: el equipo enviará esa parte. La biblioteca SDS enlazada es una referencia, no una confirmación de marca de resina. No inventar valores numéricos del escáner ni afirmar consulta directa de manuales cuando la red impide verificarlos.

## Aportes por semana

Cada semana documenta sus aportes reales en una sección «Aportes del equipo», antes de la conclusión, separando actividades compartidas de tareas específicas. Los aportes de la semana 1 provienen de la indicación explícita del equipo: participación común de todos en herramientas, Kaggle, GitHub, página individual, enfoques del proyecto e investigación; Carla y Camila redactaron y organizaron la semana 1; Carla integró el uso de Codex con GitHub. No extrapolar estas atribuciones a otras semanas ni rellenarlas con los roles generales. Mantener ES/EN.

Las atribuciones originalmente recibidas bajo la semana 2 se redistribuyeron según la actividad: Steven redactó la documentación; todos participaron en ideas y priorización; AutoCAD/Diego, LibreCAD/Carla, QCAD/Camila y Fusion/Tinkercad/SketchUp/Steven. Carla y Steven diseñaron e imprimieron la abeja; Diego y Camila, el casco. Carla preparó la impresora y elaboró la web. La atribución de la impresión con voladizos a Diego, Camila y Steven se trasladó a la semana 3 cuando el equipo ubicó allí la práctica y proporcionó sus imágenes.

La semana 3 documenta las atribuciones confirmadas por el equipo: Carla redactó la semana, preparó el escáner y explicó/utilizó CR Studio; Camila fue la persona escaneada y preparó el modelo para fabricación; Steven y Diego asistieron en el giro durante la captura; todos revisaron, mejoraron y repitieron las capturas. Estas atribuciones se refieren a las actividades documentadas, no a una impresión en resina ya realizada.

Los apartados de aportes semanales se presentan de forma resumida en una tabla de actividad y participantes. Usar nombres cortos y «Todos» para actividades compartidas, conservar las atribuciones confirmadas y traducir al inglés. Esta preferencia afecta a los aportes, no al desarrollo técnico de cada semana.

## Semana 4 y ampliación de la semana 3

La semana 3 incorpora la práctica con voladizos y cuatro imágenes del documento. No confundirla con la documentación de impresión en resina que el equipo enviará por separado. La semana 4 se publica en `weeks/week-04.html`, con contenido y comportamiento bilingües separados. Incluye IKEA/flat-pack, propuesta de silla tortuga, kerf, parametrización, RDWorks, operación láser, revisión de encajes y Slicer for Fusion 360. El boceto y la portada son imágenes generadas; los diagramas vectoriales son explicativos, no capturas de trabajo. Las fotografías provienen del documento y tienen copias web comprimidas. El valor 0,05 mm se identifica como ajuste del ejercicio; no se presenta como medición universal del kerf ni se garantizan seguridad estructural o producción en serie. Los valores 12 mm/s y 40 % son ejemplos del documento, no parámetros finales verificados. No se recibieron descargables ni aportes individuales de la semana 4, por lo que no se inventaron. Las páginas externas de referencia bloquearon la consulta en este entorno; no se afirman fechas de consulta ni verificación directa.

## Orden de la semana 1

La semana 1 se organiza en 1.1 Investigación y desarrollo (alternativas, explicación, selección y fundamentos conservados), 1.2 Desarrollo y documentación web (apartados a–h y herramientas originales) y 1.3 Acerca de nosotros. Conservar todos los párrafos, listas, tablas, referencias y ocho evidencias originales al reorganizar. Las alternativas de agua purificada, identificación/seguimiento de mascotas y dosificación de miel fueron indicadas por el equipo; no presentarlas como prototipos construidos ni necesidades verificadas mediante estudios. La descarga al final enlaza al ZIP actual del repositorio completo y se etiqueta expresamente como tal. Las traducciones nuevas amplían el diccionario existente de `weeks/week-01-i18n.js`.

## Investigación y conservación del material

`project.html`, `project-content.js` y `project.js` reúnen la teoría de innovación/producto, lluvia de ideas y matriz de priorización, necesidades, Kano, JTBD e introducción al caso IKEA. El botón del cuaderno del proyecto en el inicio abre esta página. Este traslado permite que las semanas 1–3 respeten su esquema sin perder material. La semana 1 mantiene solo investigación inicial/selección, desarrollo web e integrantes; la galería histórica de elaboración web se movió desde la semana 2 a su apartado de plantilla. La auditoría de la reorganización verificó que las 52 instancias de imágenes originales y los 16 enlaces a archivos y modelos online siguen accesibles entre las tres semanas y el cuaderno. Mantener traducciones, galerías, navegación y centrado vertical de texto/imagen.
