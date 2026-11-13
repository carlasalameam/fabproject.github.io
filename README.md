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

La foto grupal original está publicada en `images/team/equipo-de-trabajo.jpeg` y asignada en `const groupPhoto` de `index.html`. Se muestra completa y centrada, sin recortes, con texto alternativo y pie en español e inglés. Las fichas individuales siguen configurándose en `members`.

La franja institucional usa los tres logos proporcionados por el equipo, guardados en `images/`. Se conservan los archivos originales, sus colores y proporciones. Los logos se integran en la misma barra azul de APIA y el menú, sin tarjetas ni franja adicional. Una presentación monocromática mediante CSS permite leerlos sobre azul; los archivos originales permanecen intactos.

## Documentación semanal publicada

La semana 1 está en `weeks/week-01.html`, con evidencias en `images/week-01/`. Su tarjeta en `index.html` abre esa página; las otras semanas conservan el panel de contenido pendiente. Para editar la semana 1 modifica directamente su HTML, no `entries`. El español es el idioma fuente. La semana 1 cuenta con traducción completa al inglés en `weeks/week-01-i18n.js`. El selector ES/EN cambia el contenido y conserva la preferencia al regresar al inicio. Las capturas de pantalla se mantienen como evidencias originales; sus pies y textos alternativos tienen traducción.

Los diagramas de flujo y Maslow se representan con HTML/CSS y texto accesible, sin dependencias externas. Los pictogramas son símbolos propios de identificación, no logos oficiales. Las citas numeradas enlazan a la bibliografía. El autor, enlace y licencia del conjunto de datos de Kaggle y la herramienta de IA usada en la ilustración conceptual quedan pendientes de identificación por el equipo. Los enlaces bibliográficos externos no pudieron comprobarse desde el entorno por restricciones de red.

La tarjeta de la semana 1 incluye `images/week-01/cover.png`: ilustración conceptual generada con IA para representar el aprendizaje de herramientas web, el desarrollo de la idea y el dosificador de miel. Es una portada ilustrativa y no evidencia de un prototipo construido. El texto alternativo se adapta al idioma seleccionado.

## Idiomas y alcance de la documentación

Todo texto nuevo se redacta primero en español y debe publicarse acompañado de su traducción al inglés: títulos, párrafos, tablas, diagramas, pies de figura y descripciones accesibles. Al editar la semana 1, actualiza también su diccionario de traducción y comprueba ES → EN → ES. Los títulos bibliográficos se conservan en su idioma de publicación. No añadir predicciones sobre el estado o los próximos pasos del proyecto a las semanas sin que el equipo las solicite; el apartado 6.4 fue eliminado por este motivo.

## Semana 2: herramientas de diseño digital

`weeks/week-02.html` contiene exclusivamente clasificación y prácticas de AutoCAD, LibreCAD, QCAD, Fusion, Tinkercad y SketchUp Web. Son tres herramientas de CAD 2D y tres de modelado 3D; no incluir Paint, GIMP, Photoshop o Inkscape como prácticas realizadas. Por indicación posterior del equipo, se retiró también la explicación de raster: la semana se limita a las seis herramientas 2D/3D evaluadas. La tabla distingue dimensiones, tipo de representación y formato editable. Las cuatro capturas CAD de abeja y casco permanecen aquí; sus fotografías de fabricación pertenecen a la semana 3. La portada generada representa diseño 2D/3D, no una evidencia de trabajo.

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

Las fotos y nombres de `EQUIPO.zip` están publicados en el orden Carla Salamea Matovelle, Diego Minchalo Cabrera, Camila Aguirre Mendieta y Steven Aucapiña Lozada. Todos comparten el rol «Desarrollo e investigación» y la descripción «Estudiante de sexto ciclo de Ingeniería Industrial». Las tareas en `members` incluyen diseño/fabricación digital, generación de ideas y toma de decisiones para todos, más las tareas específicas indicadas por el equipo. Mantener ES/EN y este orden. Las imágenes originales están en `images/team/` sin modificaciones; el encuadre se controla con CSS. La foto grupal se muestra antes de las fichas individuales en la sección del equipo.

Los cuatro perfiles deben mantener seis tareas cada uno en ambos idiomas. Carla y Steven también incluyen documentación semanal y registro fotográfico. La responsabilidad principal de Diego se expresa dentro de la tarea de diseño/fabricación digital para evitar duplicarla.

## Semana 3: impresión y escaneo 3D

El usuario confirmó 3.1 Impresión PLA (llaveros y voladizos) y 3.2 Escáner CR-SCAN 01 (apartados a–h). La impresión se trasladó desde la semana 2 conservando fotografías, video sin audio, pasos de uso, parámetros verificados del G-code y archivos originales. El perfil `flsun_v400` identifica el perfil de Cura, no prueba el modelo físico. Las temperaturas confirmadas son 210 °C y 60 °C; no son universales. El equipo confirmó además el uso de boquilla de 0,4 mm con PLA. El ejemplo de cálculo dimensional publicado está rotulado como hipotético y no constituye una medición ni una comparación real entre impresoras. No atribuir comandos a edición manual sin una versión anterior comparable.

El escaneo conserva seis fotos originales y la captura final. OBJ y MTL se mantienen sin modificar; conservar juntos los nombres para que el OBJ encuentre el material. Se añade la distinción entre malla cerrada y sólido CAD, comparación resina/PLA y un flujo general de seguridad y posprocesado. La impresión en resina y su posprocesado ya están documentados mediante el PDF CURADO DE RESINA. La biblioteca SDS enlazada es una referencia, no una confirmación de marca de resina. No inventar valores numéricos del escáner ni afirmar consulta directa de manuales cuando la red impide verificarlos.

## Aportes por semana

Cada semana documenta sus aportes reales en una sección «Aportes del equipo», antes de la conclusión, separando actividades compartidas de tareas específicas. Los aportes de la semana 1 provienen de la indicación explícita del equipo: participación común de todos en herramientas, Kaggle, GitHub, página individual, enfoques del proyecto e investigación; Carla y Camila redactaron y organizaron la semana 1; Carla integró el uso de Codex con GitHub. No extrapolar estas atribuciones a otras semanas ni rellenarlas con los roles generales. Mantener ES/EN.

Las atribuciones originalmente recibidas bajo la semana 2 se redistribuyeron según la actividad: Steven redactó la documentación; todos participaron en ideas y priorización; AutoCAD/Diego, LibreCAD/Carla, QCAD/Camila y Fusion/Tinkercad/SketchUp/Steven. Carla y Steven diseñaron e imprimieron la abeja; Diego y Camila, el casco. Carla preparó la impresora y elaboró la web. La atribución de la impresión con voladizos a Diego, Camila y Steven se trasladó a la semana 3 cuando el equipo ubicó allí la práctica y proporcionó sus imágenes.

La semana 3 documenta las atribuciones confirmadas por el equipo: Carla redactó la semana, preparó el escáner y explicó/utilizó CR Studio; Camila fue la persona escaneada y preparó el modelo para fabricación; Steven y Diego asistieron en el giro durante la captura; todos revisaron, mejoraron y repitieron las capturas. Estas atribuciones originales no asignan roles específicos del posprocesado de resina; no inferir nombres a partir de las fotografías.

Los apartados de aportes semanales se presentan de forma resumida en una tabla de actividad y participantes. Usar nombres cortos y «Todos» para actividades compartidas, conservar las atribuciones confirmadas y traducir al inglés. Esta preferencia afecta a los aportes, no al desarrollo técnico de cada semana.

## Semana 4 y ampliación de la semana 3

La semana 3 incorpora la práctica con voladizos y cuatro imágenes del documento. La documentación de impresión en resina se incorporó por separado con su propio PDF y fotografías. La semana 4 se publica en `weeks/week-04.html`, con contenido y comportamiento bilingües separados. Incluye IKEA/flat-pack, propuesta de silla tortuga, kerf, parametrización, RDWorks, operación láser, revisión de encajes y Slicer for Fusion 360. El boceto y la portada son imágenes generadas; los diagramas vectoriales son explicativos, no capturas de trabajo. Las fotografías provienen del documento y tienen copias web comprimidas. El valor 0,05 mm se identifica como ajuste del ejercicio; no se presenta como medición universal del kerf ni se garantizan seguridad estructural o producción en serie. Los valores 12 mm/s y 40 % son ejemplos del documento, no parámetros finales verificados. El ZIP de evidencias de la semana 4 conserva las once imágenes originales del documento, separadas de los archivos CAD. No se inventaron aportes individuales de esta semana. Las páginas externas de referencia bloquearon la consulta en este entorno; no se afirman fechas de consulta ni verificación directa.

## Orden de la semana 1

La semana 1 se organiza en 1.1 Investigación y desarrollo (alternativas, explicación, selección y fundamentos conservados), 1.2 Desarrollo y documentación web (apartados a–h y herramientas originales) y 1.3 Acerca de nosotros. Conservar todos los párrafos, listas, tablas, referencias y ocho evidencias originales al reorganizar. Las alternativas de agua purificada, identificación/seguimiento de mascotas y dosificación de miel fueron indicadas por el equipo; no presentarlas como prototipos construidos ni necesidades verificadas mediante estudios. La descarga al final enlaza al ZIP actual del repositorio completo y se etiqueta expresamente como tal. Las traducciones nuevas amplían el diccionario existente de `weeks/week-01-i18n.js`.

## Investigación y conservación del material

`project.html`, `project-content.js` y `project.js` reúnen la teoría de innovación/producto, lluvia de ideas y matriz de priorización, necesidades, Kano, JTBD e introducción al caso IKEA. El botón del cuaderno del proyecto en el inicio abre esta página. Este traslado permite que las semanas 1–3 respeten su esquema sin perder material. La semana 1 mantiene solo investigación inicial/selección, desarrollo web e integrantes; la galería histórica de elaboración web se movió desde la semana 2 a su apartado de plantilla. La auditoría de la reorganización verificó que las 52 instancias de imágenes originales y los 16 enlaces a archivos y modelos online siguen accesibles entre las tres semanas y el cuaderno. Mantener traducciones, galerías, navegación y centrado vertical de texto/imagen.

## Esquema actualizado de la semana 4

La semana 4 sigue 4.1 Parametrización de diseño: objetivo del kit, objeto modular, parámetros y restricciones, distinción entre kerf/holgura/tolerancia, procedimiento de caracterización, equipo y operación láser, seguridad, pruebas y aprendizajes. El contexto del efecto IKEA y su diagrama se trasladaron al cuaderno de investigación sin perderlos. La silla conserva su carácter de propuesta; no afirmar fabricación ni validación estructural de la silla sin evidencia. El ZIP final `downloads/week-04/semana-04-evidencias.zip` conserva los bytes originales de las imágenes 5–15 del documento aportado; se etiqueta como evidencias. Mantener ES/EN, galerías y referencias.

Semana 4: el equipo confirmó que cortó y ensambló el oso panda, con MDF de 3 mm, velocidad de 12 mm/s y potencia de 40 %. La dificultad real fue el ajuste demasiado apretado o flojo; se cortaron y probaron pares de piezas para ajustar compensación y corte. La silla tortuga sigue siendo propuesta. Mantener los valores confirmados como propios de esta práctica, sin convertir el parámetro de ajuste 0,05 mm en una medición universal del kerf.

Por indicación posterior del equipo, se retiró el apartado «Acerca de nosotros» de la semana 1 y de su índice. Los perfiles y fotografías de los integrantes se conservan en la página principal. Los aportes semanales permanecen en su apartado.

## Semana 1: documento base y guía complementaria

Por indicación expresa del equipo, el documento Semana 01 constituye la base de contenido y la distribución de semanas es complementaria. La semana 1 vuelve a incluir bajo 1.1 los fundamentos, flujo de desarrollo, sostenibilidad, Maslow, ciclo de vida y matriz BCG, además de las alternativas y selección del proyecto. Se conserva la versión científicamente corregida: no equiparar BCG con etapas del ciclo de vida ni afirmar que la cristalización natural implica deterioro o que ya se validó el dosificador. Las herramientas de desarrollo se agrupan con la plantilla en 1.2, manteniendo a–h y todas las evidencias. No reintroducir Acerca de nosotros: pertenece a About. Mantener traducciones y las catorce figuras numeradas en orden. El cuaderno del proyecto conserva también su contenido de apoyo. No publicar los documentos de indicaciones como listas de pendientes.

Semana 2: presentación en seis tarjetas de software (tres 2D y tres 3D), cada una con su captura, explicación y enlace al recurso situado al final. Se conservan las diez capturas originales, todos los archivos y los enlaces online. La tabla enlaza a las tarjetas y a los recursos. El encabezado utiliza la portada conceptual ya existente. Las reglas visuales están en `weeks/week-02-layout.css`; mantener ES/EN, tema claro/oscuro, galerías y vista móvil. No reintroducir raster ni atribuir programas o pruebas no realizados.

## Inventario fotográfico y práctica de la semana 3

El documento Maquinas FABLABUCUENCA identifica cinco impresoras de filamento (FLSUN, Prusa, Elegoo, Bambu Lab X1 Carbon con AMS visible y Creality). La etiqueta confirma Anycubic Photon M3 Plus. La otra máquina naranja Creality es una estación de lavado/curado, no una segunda impresora; no atribuir variante a equipos sin etiqueta legible. Las siete fotos de equipos están en `images/week-03/` y en un ZIP al final de la semana. El resto de máquinas del documento (UV/láser) no se incluyó en el inventario 3D. Las fuentes oficiales externas no pudieron consultarse por bloqueo403; no afirmar verificación directa de especificaciones.

La semana 3 reúne también cuatro capturas de boceto/modelo de abeja y casco, el flujo CAD y los aprendizajes comunicados sobre velocidad, PLA, soportes y escaneo. Mantener las distinciones: flexibilidad depende del material, multicolor requiere AMS/materiales compatibles, skirt comprueba extrusión mientras brim/raft ayudan a adhesión, cerrar huecos interpola geometría. Si se captura con ojos cerrados, mantener la condición y seguir la seguridad del escáner. No convertir el ejemplo hipotético de calibración en resultados reales. El catálogo está antes del diseño y la práctica de escaneo. Las tarjetas utilizan div.machine-card para evitar artículos anidados al sincronizar el HTML inicial.

## Orden vigente de semana 4: kerf y panda

Por indicación del equipo: primero la prueba de kerf y encaje en F, errores y repeticiones; después parámetros/restricciones, holgura y tolerancia, determinación de compensación, equipo y seguridad; finalmente el despiece del panda en Slicer y su montaje. El uso de Slicer para el panda fue confirmado por el equipo. La propuesta de silla y su boceto se trasladaron al cuaderno del proyecto, junto con el acceso al archivo original de imágenes; no se borraron. La portada actual representa kerf y panda, no la silla.

La potencia de 40 % es un ajuste del controlador; el kerf depende también de foco, velocidad y material. Los 10–15 s son una espera orientativa comunicada en clase/práctica, sin garantía de evacuación; mantener extracción y seguir el protocolo antes de abrir. No usar olor como criterio de seguridad ni deducir distancia focal de referencias ambiguas de 3/5 mm: usar galga y manual. Mantener la interferencia intencional de un press-fit diferenciada de colisiones geométricas. El ZIP `kerf-panda-evidencias.zip` reúne las fotografías publicadas y diagramas en ambos idiomas; los archivos originales previos permanecen disponibles.

## Registro de impresión y curado en resina — semana 3

El PDF CURADO DE RESINA confirma la fabricación del busto y posprocesado: preparaciónSTL/laminador, Anycubic Photon M3 Plus, retirada, limpieza manual, soportes, estación Creality y poscuradoUV aproximado de dos minutos. Las18 imágenes extraídas sin retoque están en `images/week-03/resina/`; documento original y ZIP de fotografías al final de la página. Se retiraron las menciones a continuación futura en ambos idiomas. Mantener OBJ/MTL del escaneo y los archivos PLA sin modificar.

La etiqueta fotografiada identifica JAMG HE Water Washable (verde); no hay FDS específica ni nombre/versión inequívocos del laminador en el documento. No atribuir CHITUBOX como programa usado. El tiempo2min es reportado, no una garantía universal de curado completo ni de propiedades medidas. La foto del grifo se conserva como registro, acompañada por la indicación de recoger el líquido contaminado y no verterlo al desagüe, incluso para resina lavable con agua. Las mascarillas de las fotos no demuestran protección frente a vapores. Diferenciar lavado, secado y poscurado, y no afirmar precisión dimensional por apariencia. La semana5 se documenta en su página propia con el material aportado.

## Sustitución del ejemplo Slicer: tortuga

El equipo sustituyó el panda por la tortuga en la semana4 y aportó las capturas de Fusion/Slicer y tres archivos. La semana4 usa ahora `tortuga2.0.stl`, `tortugaespaldar.dxf` y `tortugaespaldar.dwg`, conservados sin cambios en `downloads/week-04/tortuga/` y juntos en un ZIP. Las dos capturas originales están en `images/week-04/tortuga-fusion.png` y `tortuga-slicer.png`. Conservar todas las observaciones de kerf y Slicer: 0,05mm es ajuste de la pruebaF, importación/escala se verifican antes de cortar y no se aplican compensaciones dos veces. No atribuir a la tortuga las fotos o pruebas físicas del panda.

Las cuatro fotos reales del panda y sus descargas se trasladaron a `project.html#panda-antecedente` como registro previo. No se borraron archivos. El STL es malla sin unidades intrínsecas y el DXF no declara INSUNITS; no presentar dimensiones físicas inferidas. El STL no conserva el historial paramétrico de Fusion. La portada reutiliza una ilustración conceptual de tortuga, no una fotografía de fabricación. La semana5 dispone de documentación propia de silla visual, caja y empaque.

## Semana 5: entrega de caja, folleto y empaque

Publicada en `weeks/week-05.html` con contenido ES/EN separado y estilos `week-05-layout.css`. Por instrucción del equipo, la silla contiene únicamente cinco fotografías y pies de imagen. No incorporar redacción de silla, conclusiones, aprendizajes o problemas sin el contenido que el equipo enviará después. El resto se basa en semana5.pdf: caja paramétrica en Fusion, uniones finger joint, living hinge, prototipo66×66×44mm y versión166×166×106mm, folleto digitalcolor, manualimpresoBN y kit en dosbolsas. No describir esas dimensiones como escalado uniforme ni afirmar precisión, hermeticidad o seguridadinfantil medida.

El F3D original está en `downloads/week-05/caja-final.f3d` sin modificar y se descarga con su nombre original; su contenedor Zstandard se validó por CRC y se extrajo su preview, usada como imagen adicional con atribución. El ZIP de evidencias reúne las18 imágenes extraídas delPDF y ese preview. El enlace QR fue decodificado de la imagen y se ofrece como enlace delQR: https://scanned.page/p/X9CexJ ; no se verificó su destino remoto. No atribuir marca NECK UVIC ni parámetros de corte ausentes: usar descripción genérica del equipo delFabLab y referir a la seguridad ya explicada en semana4. La portada es conceptualgenerada basada en las fotos y no evidencia experimental.

La semana 5 incorpora las dos cortadoras láser del documento de máquinas: equipo con tapa amarilla y equipo de gabinete gris con rótulo NEXTION. Las dos fotografías originales se muestran junto a las descripciones ES/EN y se incluyen sin modificar en el ZIP final (21 imágenes). No se atribuyen modelos, potencia ni área útil sin placa verificable ni se afirma haber usado ambos equipos para la caja. Cada equipo requiere ajustes propios de potencia, velocidad y kerf; los valores de semana 4 no se trasladan a esta práctica. Las conclusiones, aprendizajes, problemas y el texto de la silla de semana 5 siguen pendientes de información del equipo.

La sección 5.1 de semana 5 incorpora la explicación del equipo sobre el diseño de la mecedora tortuga: arcos, curvas, restricciones, encajes y revisión por cambio de material. Se conserva la galería previa y se añade la captura original de TORTUGA.zip, con pie ES/EN, también en el ZIP final (22 imágenes). El nuevo DXF original se descarga como mecedora tortuga4.0.dxf; es un dibujo 2D editable con milímetros declarados, no un F3D ni un archivo validado para corte. No inferir material o espesor final por la anchura de las ranuras. La comodidad, estabilidad y seguridad se expresan como objetivos, sin resultados de ensayos inventados. Las conclusiones, aprendizajes y problemas generales siguen pendientes; la explicación del diseño ya está incorporada.

Los aportes de semanas 3, 4 y 5 siguen la distribución corregida por el equipo: cuadros bilingües compactos con contributions.css, una sola tabla centrada por semana. Los nombres se mantienen en formato breve y «Todos» identifica a Carla, Diego, Camila y Steven. La fila «Impresión» de semana 5 conserva la actividad indicada sin atribuirle tecnología 3D. Los aportes de semanas 1 y 2 permanecen intactos.

La sección principal Final Project y la introducción de project.html muestran la imagen conceptual del dosificador de miel generada con IA y aprobada por el usuario. Se conserva sin modificaciones en images/project/dosificador-miel-concepto.png, con bocetos, modelado, fabricación y electrónica alrededor. El pie y el texto alternativo cambian entre ES/EN; se identifica como concepto generado, no como fotografía del prototipo. No se añade la denominación «inteligente».

Las contribuciones de todas las semanas publicadas (1–5) comparten el formato aprobado de semana 5: título, una tabla centrada de dos columnas (Actividad/Integrantes), encabezado azul claro y nota con los nombres de todos. La semana 3 reúne sus 13 actividades en una sola tabla. Se conservan todas las actividades y responsables, incluidas las de semanas 1 y 2; usar contributions.css en las próximas semanas.
