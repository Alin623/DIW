# Pet Haven

- **Autor:** Dumitru Alin Ionescu
- **Nombre de la práctica:** ionescu_dumitru_alin_diw_p3.2
- **Asignatura:** Desarrollo de Interfaces Web (DIW)

## Descripción

Sitio responsive de adopción de animales realizado con **HTML semántico, Sass y Vite**. El diseño parte de las pantallas de escritorio y móvil de Figma e incluye una página principal, un catálogo de perros y un formulario de adopción.

## Páginas

- `index.html`: portada, buscador, formas de ayudar e historia de la protectora.
- `mascotas.html`: catálogo con filtros por edad.
- `formulario.html`: solicitud de adopción con validación del navegador. La demo no envía ni almacena datos.

## Estructura

```text
.
├── index.html
├── mascotas.html
├── formulario.html
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── design-reference.png
│   │   ├── bella.jpg
│   │   ├── luna.jpg
│   │   ├── max.jpg
│   │   ├── rocky.jpg
│   │   ├── toby.jpg
│   │   ├── tor.jpg
│   │   └── stormy.webp
│   ├── main.js
│   └── styles/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _components.scss
│       ├── _layout.scss
│       ├── _globals.scss
│       └── main.scss
└── vite.config.js
```

Los estilos usan módulos Sass con `@use`, variables de diseño, un mapa de breakpoints y un mapa de temas de tarjetas. La compilación de Vite genera las tres páginas estáticas en `docs/`, listas para GitHub Pages.

## Uso

```bash
npm install
npm run dev
```

Generar y previsualizar la entrega:

```bash
npm run build
npm run preview
```
