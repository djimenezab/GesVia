# GesVía · Gestión de la conservación de carreteras (PWA)

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
(`gesvia-v1.0` → `gesvia-v1.1`). Así los móviles descargan la versión nueva en vez
de seguir usando la copia guardada en caché.

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
