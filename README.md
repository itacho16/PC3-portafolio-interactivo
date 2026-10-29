# Portafolio Interactivo — Soft Pérez

Landing page responsiva para presentar los servicios y proyectos de Soft Pérez. El proyecto fue elaborado para la Práctica Calificada 03 del curso Hojas de Estilo en Cascada Avanzado.

## Características

- **Bootstrap 5:** barra de navegación colapsable en móviles, sistema de grid, formulario y botones.
- **Identidad visual:** logotipo de la empresa en `img/SOFT PEREZ.jpg`.
- **Efectos 2D:** las tarjetas de proyectos aplican rotación, escalado y traslación/sesgado al pasar el cursor.
- **Efectos 3D:** las imágenes utilizan perspectiva y rotación en los ejes X e Y al pasar el cursor.
- **Animaciones CSS:** entrada animada del título y loader giratorio definidos con `@keyframes`.
- **Navegación activa:** la línea decorativa sigue el enlace seleccionado de Inicio, Proyectos o Contacto.
- **Diseño responsivo:** adaptable a móviles, tablets y escritorio.

## Estructura del proyecto

```text
PC3/
├── img/
│   └── SOFT PEREZ.jpg
├── index.html
├── estilos.css
├── script.js
└── README.md
```

- `index.html`: contenido y estructura de la página.
- `estilos.css`: estilos, diseño adaptable, transformaciones y animaciones.
- `script.js`: loader inicial y estado activo de los enlaces de navegación.
- `img/SOFT PEREZ.jpg`: logotipo local de Soft Pérez.

## Cómo ejecutar

Abre `index.html` directamente en un navegador o inicia un servidor local desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Después, visita [http://localhost:8000](http://localhost:8000).

Bootstrap y las imágenes de las secciones se cargan desde servicios externos, por lo que se requiere conexión a Internet para mostrarlos. El formulario es visual y todavía no está conectado a un servicio de envío de mensajes.
