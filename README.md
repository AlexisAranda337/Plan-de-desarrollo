# Plan de Desarrollo 2026–2030 en breve

Versión de consulta del Plan de Desarrollo 2026–2030 de la Facultad de Ciencias, UAEMéx, para difundirlo entre la comunidad. Presenta los 6 pilares y los 18 ejes en lenguaje claro. Cada eje incluye su objetivo, lo que le toca a cada sector, los objetivos específicos, las estrategias con su sello C/P/I (Cercana, Progresista, Incluyente) y las metas principales.

Coordinación de Planeación · Facultad de Ciencias, UAEMéx.

## Estructura

```
pd-en-breve/
├── index.html        Página principal (estructura)
├── css/estilos.css   Diseño: colores, tipografía DM Sans, modo claro/oscuro
├── js/contenido.js   TODO el texto del Plan (aquí se edita el contenido)
├── js/app.js         Lógica: búsqueda, filtros por sector, vistas por eje, cambio de tema
└── .nojekyll         Indica a GitHub Pages que publique los archivos tal cual
```

Es un sitio estático: no necesita servidor, base de datos ni instalación. Solo carga la fuente DM Sans desde Google Fonts.

## Publicar en GitHub Pages

1. En GitHub, crea un repositorio público, por ejemplo `plan-desarrollo`.
2. Sube los archivos de esta carpeta a la raíz del repositorio, incluido `.nojekyll`:
   - Desde la web: **Add file → Upload files** y arrastra todo el contenido de la carpeta.
   - Desde la terminal:
     ```bash
     git init
     git add .
     git commit -m "Plan de Desarrollo 2026–2030 en breve"
     git branch -M main
     git remote add origin https://github.com/USUARIO/plan-desarrollo.git
     git push -u origin main
     ```
3. Ve a **Settings → Pages**. En *Build and deployment*, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Luego pulsa **Save**.
4. Uno o dos minutos después, el sitio estará en `https://USUARIO.github.io/plan-desarrollo/`.

Cada eje tiene su propio enlace para compartirlo: `.../plan-desarrollo/#eje-7`.

## Probar en local

Basta con abrir `index.html` en el navegador. Si prefieres un servidor local:

```bash
python3 -m http.server 8000
# y abrir http://localhost:8000
```

## Editar el contenido

Todo el texto está en `js/contenido.js`:

- `EJES[n]`: título, resumen de una línea que aparece en la tarjeta y sectores (`E` estudiantes, `D` docentes e investigación, `A` personal administrativo, `C` toda la comunidad).
- `DET[n]`: detalle del eje.
  - `obj`: objetivo en lenguaje claro.
  - `foryou`: listas de lo que le toca a cada sector.
  - `oes`: objetivos específicos. Cada estrategia en `st` lleva `[C,P,I]`, con `1` si aplica y `0` si no. Cada meta en `me` es `["cifra", "descripción"]`.
- `PILARES`: agrupación de ejes por pilar.

Recomendación: ten la página abierta en el navegador mientras editas y recárgala para ver los cambios. Si la página queda en blanco, revisa que no falte una coma o unas comillas en `contenido.js`; la consola del navegador (F12) indica la línea del error.

## Notas

- **Fuente oficial:** los resúmenes son una versión de divulgación. La referencia normativa es el documento del Plan aprobado el 30 de septiembre de 2026 y su Matriz de Consistencia.
- **Modo claro/oscuro:** la página toma el modo del dispositivo y el botón de la barra superior permite cambiarlo. Cada navegador recuerda la elección.
- **Siguiente etapa (observatorio):** la estructura de `contenido.js` sigue el formato eje → objetivo → estrategia → meta. Puede migrarse a modelos de Django para mostrar el avance de las metas con datos del RMAI, sin cambiar el diseño.
