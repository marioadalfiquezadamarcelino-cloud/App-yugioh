# Yu-Gi-Oh! React App 🃏

Aplicación web desarrollada con React JS que muestra una colección de cartas
inspiradas en el juego Yu-Gi-Oh!.  
Los usuarios pueden explorar las cartas, ver información detallada y construir
su propio deck siguiendo las reglas del juego.

---

##  Contenidos
- Descripción del proyecto
- Página principal
- Tecnologías utilizadas
- Componentes de terceros
- Recursos y tutoriales
- Inspiración de diseño
- Estructura del proyecto
- Diseño responsive
- Instalación y uso

---

##  Descripción del Proyecto

Este proyecto ha sido desarrollado como un prototipo utilizando **React JS,
JavaScript, HTML y CSS**.  
La aplicación permite:

- Mostrar cartas a partir de un archivo JSON
- Visualizar información detallada mediante un modal
- Construir un deck con un máximo de 3 copias por carta
- Navegar entre varias páginas compartiendo Header y Footer

El objetivo principal es aplicar buenas prácticas de **componentes reutilizables,
código limpio y experiencia de usuario (UX/UI)**.

---

##  Página Principal

La página principal muestra una cuadrícula responsive de cartas generadas a
partir de un array de objetos JSON.  
Al hacer clic sobre una carta se abre una ventana modal con información completa:
imagen, nombre, tipo, efecto y valores de ATK y DEF.

La página es accesible desde:
- `/`
- `/home`

---

##  Tecnologías Utilizadas

- React JS
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Flexbox y Media Queries

---

##  Componentes de Terceros

- React: https://reactjs.org/
- React Router DOM: https://reactrouter.com/
- Vite: https://vitejs.dev/

---

##  Recursos y Tutoriales

- Documentación oficial de React  
  https://reactjs.org/docs/getting-started.html
- Documentación de Vite  
  https://vitejs.dev/guide/
- Plantilla README  
  https://github.com/othneildrew/Best-README-Template
- Principios de código limpio  
  https://www.hostgator.mx/blog/clean-code-codigo-limpio/

---

##  Inspiración de Diseño

- Plantillas y ejemplos de Figma  
  https://www.figma.com/templates/web-design-inspiration/
- Conceptos de UX/UI  
  https://woko.agency/blog/monitorizar-evaluar-experiencia-usuario/

---

##  Estructura del Proyecto

src/
├─ components/
│ ├─ Card/
│ ├─ CardModal/
│ ├─ Header/
│ └─ Footer/
├─ pages/
│ ├─ Home/
│ ├─ Deck/
│ ├─ About/
│ └─ Privacy/
├─ data/
│ └─ cards.json
├─ App.jsx
└─ main.jsx