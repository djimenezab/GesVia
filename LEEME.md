# GesVía · Gestión de la conservación de carreteras (PWA)

## Novedades v1.51
- El indicador de color del estado se ha movido **encima** de la barra deslizante (antes iba al
  lado y en tablet estorbaba al arrastrar con el dedo). La barra ocupa ahora todo el ancho.

## Novedades v1.50
- Botón 🖨 en cada orden de trabajo para generar un **parte de trabajo imprimible** (PDF): incluye
  carretera y PK, familia, estado, prioridad, fechas, GPS, los trabajos a realizar, las observaciones,
  las **fotos a tamaño grande** y un espacio para firmas. Ideal para entregárselo a quien ejecuta el trabajo.

## Novedades v1.49
- La pestaña **Red** se ha movido a **Ajustes** (como sección plegable «Inventario de la red»),
  liberando espacio en el menú principal. El menú queda: Panel · Inspección · Órdenes · Informe · Ajustes.
- Botón ✏️ en **«Últimas inspecciones realizadas»** para **editar una inspección** (tramo, familia,
  fecha, inspector, indicador, observaciones, GPS y fotos) sin tener que borrarla y rehacerla.

## Novedades v1.48
- La sección del **plano** en Ajustes está **plegada** por defecto (ocupa menos); se abre con el
  botón «Desplegar» solo cuando hace falta editar trazados.
- Nueva sección **Vigilantes / inspectores** en Ajustes: los nombres que añadas aparecen como
  **desplegable** al registrar una inspección (en vez de escribirlos a mano cada vez).

## Novedades v1.47
- Las carreteras aparecen **ordenadas por código** (orden natural: CM-316 antes que CM-3114) en
  todos los sitios: panel, inventario y desplegables. Ya no importa el orden en que se metieron.

## Novedades v1.46
- En la escala de PK del esquema, cuando dos marcas caen muy juntas (tramos cortos), la segunda
  etiqueta se **baja un renglón** automáticamente para que no se solapen y se lean bien.

## Novedades v1.45
- **Auto-actualización**: la app ahora carga siempre la última versión desde GitHub al abrirse
  (antes se quedaba con la copia guardada y el número de versión no cambiaba). Cuando hay una
  versión nueva, se recarga sola. El número de versión visible ya coincide con la publicada.

## Novedades v1.44
- En el «Plano de estado», el trazado resaltado es más **ancho** (se ve mejor al imprimir) y se
  ha **quitado el rótulo** del código de carretera (el propio mapa ya lleva la nomenclatura),
  para que destaque limpiamente el tramo afectado.

## Novedades v1.43
- El plano funciona **por tramo**, no por carretera entera: en el editor seleccionas carretera y
  tramo y dibujas solo ese tramo (se marca con ✓ y avanza al siguiente pendiente). El «Plano de
  estado» colorea **cada tramo con su propio estado real**, así que en una misma carretera puedes
  ver un tramo en verde, otro en ámbar y otro en rojo. El resumen indica el PK exacto de cada tramo.

## Novedades v1.42
- **Plano de la Zona 2 incrustado** en la app (funciona sin conexión).
- **Editor de trazados** en Ajustes: dibuja el recorrido de cada carretera sobre el plano una sola
  vez (seleccionas la carretera, haces clic a lo largo de su trazado y pulsas «Terminar trazo»).
  Los trazados se guardan y se sincronizan como el resto de datos.
- Nuevo informe **«Plano de estado»**: eliges familia y nivel (p. ej. Señalización horizontal ·
  Solo críticos) y la app colorea sobre el mapa únicamente esas carreteras, listo para imprimir.

Archivo nuevo en el repositorio: `plano_zona2.jpg` (imagen de fondo del plano).

## Novedades v1.41
- **Fotos, observaciones y GPS en órdenes de trabajo** (y fotos múltiples también en inspecciones).
- Las **fotos se guardan como archivos sueltos** en la carpeta `fotos/` del repositorio de GitHub
  (no dentro del JSON), de modo que el archivo de datos se mantiene ligero y las fotos no rompen
  el límite de tamaño de la sincronización. En el JSON solo queda la ruta de cada foto.
- Si haces una foto sin conexión, queda pendiente en el dispositivo y se sube automáticamente
  cuando vuelve la conexión (junto con el resto de cambios).
- Las fotos antiguas (que se guardaban dentro del JSON) se migran solas al nuevo sistema.

## Novedades v1.40
- **Sincronización de bajada mejorada**: además de descargar al abrir la app, ahora también
  se comprueba GitHub al **volver a la app** (desbloqueo, cambio de aplicación, foco) y de forma
  **periódica cada 3 minutos** mientras está abierta. Así los cambios hechos en otro dispositivo
  aparecen solos.
- Protección de datos: el refresco automático **nunca pisa** cambios locales que aún no se hayan
  subido, ni interrumpe una edición en curso (modal abierto).

## Novedades v1.39
- Botón ✏️ para **editar una orden de trabajo** (carretera, tramo, familia, prioridad, estado
  y descripción) sin borrarla. Si se pasa a «Completada» se puede indicar la fecha de ejecución.

## Novedades v1.38
- Corregida la alineación de la escala de PK del esquema: cada marca cae ahora exactamente
  en la línea que separa los cuadros de cada tramo (antes se desviaba en tramos cortos).

## Novedades v1.36
- Retirada la fila de descripciones de tramo del esquema (no quedaba bien centrada);
  el esquema vuelve a mostrarse limpio con los PK de referencia debajo.

## Novedades v1.35
- Las descripciones de tramo del esquema se muestran **alternadas en dos niveles** (una arriba,
  la siguiente pegada al cuadro con una guía vertical), para que los nombres largos no se solapen.

## Novedades v1.34
- El esquema lineal muestra ahora la **descripción de cada tramo** encima de su columna
  (en el panel y en los informes), para localizar más fácil dónde está el problema.

## Novedades v1.33
- La pestaña **Datos** se ha integrado dentro de **Ajustes** (exportar/importar copia, cargar
  ejemplo, borrar datos e información de almacenamiento), liberando espacio en la barra superior
  del móvil.

## Novedades v1.32
- Al crear una orden puedes marcarla como **«Ya realizada»** e indicar la **fecha de ejecución**:
  queda registrada directamente en el histórico de órdenes completadas. Ideal para volcar trabajos
  antiguos hechos antes de usar la app (p. ej. una reposición de firme y repintado ya ejecutados).

## Novedades v1.31
- Botón ✏️ para **editar un tramo** (PK inicio, PK fin y descripción) sin tener que borrarlo:
  se conservan sus inspecciones y órdenes.
- Corregida la numeración de versión (venía saltando a 2.x por error).

## Novedades v2.3
- Nuevo tipo de informe **Órdenes de trabajo completadas (histórico)**: filtra por carretera,
  familia y rango de fechas (desde/hasta). Incluye un resumen de «nº de veces por carretera y
  familia» con la fecha de la última actuación (p. ej. cuántas veces se ha pintado una vía y cuándo),
  y el detalle cronológico de cada trabajo ejecutado.

## Novedades v2.2
- **Informes por tipo**: al entrar en Informes eliges primero qué documento quieres:
  - *Informe de estado de la vía* (con gráfica lineal, como hasta ahora).
  - *Listado de tramos con defecto o críticos* (sin gráfica: solo la tabla, agrupada por carretera).
  - *Órdenes de trabajo pendientes*.
- Los filtros de familia y contenido se muestran solo cuando aplican a ese tipo de informe.

## Novedades v2.1
- Número de versión visible junto al título.
- Nueva pestaña **Ajustes**: define el sector/zona (p. ej. «Zona 2»); aparece en la cabecera y en los informes.
- **Buscador** en el Inventario de la red (por código, denominación o sector).
- **Informe por familia**: al elegir una familia concreta, solo salen las carreteras con incidencia en ella y el esquema muestra únicamente esa familia.
- **Filtro por carretera** en el listado de Órdenes de trabajo.

Aplicación web instalable (PWA), con la misma estructura que APP-Regin:
funciona offline, se instala en el móvil con su propio icono y se publica en GitHub Pages.

Sigue el esquema del GSM (Ministerio de Fomento, 1996):
**Inventario → Inspecciones → Indicador de estado → Programación y ejecución (órdenes de trabajo)**.

## Archivos del repositorio

```
index.html      ← toda la aplicación
manifest.json   ← la hace instalable (nombre, icono, colores)
sw.js           ← service worker: funcionamiento sin conexión
icons/          ← iconos de la app (8 tamaños)
LEEME.md
```

## Cómo publicarla (igual que hiciste con app-regin)

1. Crea un repositorio nuevo en GitHub, por ejemplo `app-gesvia` (público).
2. Sube TODOS los archivos: `index.html`, `manifest.json`, `sw.js`, `LEEME.md`
   y la carpeta `icons` completa. (En "Add file → Upload files" puedes arrastrar
   la carpeta `icons` entera y GitHub respeta la estructura.)
3. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. En 1–2 minutos: `https://djimenezab.github.io/app-gesvia/`
5. Ábrela en el móvil → menú del navegador → **"Añadir a pantalla de inicio"** /
   **"Instalar aplicación"**. Tendrás GesVía con su icono, a pantalla completa
   y funcionando sin cobertura (ideal para inspecciones en campo).

> Las rutas son relativas ("./"), así que el repositorio puede llamarse como quieras
> sin tocar nada (a diferencia de app-regin, donde el sw.js lleva la ruta /app-regin/ fija).

## Cuando actualices la app

Si subes un `index.html` nuevo, edita en `sw.js` la primera línea y sube la versión
(`gesvia-v1.25` → `gesvia-v1.26`). Así los móviles descargan la versión nueva en vez
de seguir usando la copia guardada en caché.

## Sincronización automática con GitHub (como RegIn 1.91)

1. Abre la app y pulsa el botón **⬆⬇** de la cabecera.
2. En Configuración: usuario `djimenezab`, repositorio `GesVia`, archivo `gesvia-datos.json`
   y tu **token** de GitHub (te vale el mismo que usas en RegIn; si necesitas uno nuevo:
   Settings → Developer settings → Personal access tokens → Tokens (classic) →
   Generate new token con el permiso `repo`).
3. Guarda la configuración **en cada dispositivo** (móvil y PC) una sola vez.

A partir de ahí: al abrir la app descarga los datos del repositorio, y cada cambio se sube
solo unos segundos después. El punto de color junto a ⬆⬇ indica el estado:
verde = sincronizado · ámbar = subiendo · rojo = error o sin conexión · gris = sin configurar.
Si trabajas sin cobertura, los cambios quedan en el dispositivo; abre el panel ⬆⬇ y pulsa
"Subir ahora" cuando vuelvas a tener conexión (antes de eso, no descargues, para no pisar lo local).

🔒 Nota: el repositorio es público (lo exige GitHub Pages en cuentas gratuitas), así que el
archivo de datos también es visible públicamente, igual que ocurre con regin-datos.json.
Si algún día quieres datos privados, crea un segundo repositorio privado solo para el archivo
de datos y apunta ahí la configuración: el token también funciona con repositorios privados.

## Dónde se guardan los datos

En el localStorage del navegador de cada dispositivo:
- Exporta una copia JSON periódicamente desde la pestaña **Datos**.
- Para pasar datos del móvil de campo al PC: exportar en el móvil → enviarte el
  archivo → importar en el PC.
- Límite orientativo ~5 MB; las fotos (ya comprimidas) son lo que más ocupa.

## Escala de indicadores

| Valor | Estado | Color |
|---|---|---|
| 70–100 | Bueno | Verde |
| 40–69 | Defecto leve | Ámbar |
| 0–39 | Crítico | Rojo |
| Sin inspección | Sin datos | Gris |

Ayudas técnicas en los formularios: IRI orientativo del firme (< 2 bueno · 2–3,5 regular ·
> 3,5 crítico), retrorreflexión RL de marcas viales (mínimo en servicio 100 mcd·lx⁻¹·m⁻²,
UNE-EN 1436) y % de elementos en buen estado para señales, captafaros, biondas y drenaje.

## Ideas de ampliación

- Mapa geográfico (Leaflet + OpenStreetMap) con las coordenadas GPS de las inspecciones.
- Sincronización multiusuario (Supabase/Firebase) para que cuadrilla y oficina compartan datos.
- Exportación CSV para Excel y agenda de inspecciones programadas con avisos por antigüedad.
