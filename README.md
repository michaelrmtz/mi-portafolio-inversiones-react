# 💰 Mis Finanzas

Aplicación web desarrollada en React para el seguimiento y administración del patrimonio personal, permitiendo registrar instituciones financieras, inversiones, ingresos, gastos y visualizar la evolución patrimonial mediante una representación visual denominada **Mundo Patrimonial**.

---

## 📸 Características

### 📊 Portafolio financiero

- Registro de instituciones financieras.
- Administración de inversiones.
- Consulta de balance general.
- Seguimiento de ingresos.
- Seguimiento de gastos.
- Visualización consolidada del capital total.

### 🌎 Mundo Patrimonial

Sistema visual de progreso patrimonial que representa el crecimiento financiero mediante diferentes elementos:

```text
👀
🧍
🚶
🚶 + mochila
🚶 + portafolio
🚲
🛵
🚗
🏚️
🏠
🏡
🏘️
🚙
🏊
🌴
✈️
🏖️
🚁
```

El objetivo es proporcionar una representación intuitiva y motivadora del crecimiento patrimonial.

### 🎓 Tutorial interactivo

La aplicación incluye recorridos guiados utilizando:

- React Joyride

para facilitar el aprendizaje de nuevos usuarios.

---

# 🛠️ Tecnologías utilizadas

## Frontend

- React 18
- React DOM
- React Joyride

## Construcción y empaquetado

- Webpack 5
- Webpack Dev Server
- Babel
- Babel Loader

## Estilos

- CSS puro (Vanilla CSS)

## Lenguaje

- JavaScript ES6+

---

# 📂 Estructura del proyecto

```text
src
│
├── componentes
│   ├── DetallePagos
│   ├── EncabezadoPortafolio
│   ├── FormularioInstitucion
│   ├── FormularioInversion
│   ├── FormularioPago
│   ├── hooks
│   ├── MenuPrincipal
│   ├── Modal
│   ├── MundoPatrimonial
│   ├── TarjetaInstitucion
│   └── TutorialPortafolio
│
├── datosIniciales
│
├── estilos
│   ├── componentes
│   └── paginas
│
├── paginas
│   ├── Portafolio
│   └── Principal
│
└── utilerias
```

---

# 🚀 Instalación

## Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

## Entrar al proyecto

```bash
cd mi-portafolio-inversiones-react
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar en modo desarrollo

```bash
npm start
```

La aplicación quedará disponible en:

```text
http://localhost:8080
```

---

# 📦 Generar compilación para producción

```bash
npm run build
```

Los archivos optimizados serán generados mediante Webpack.

---

# 📜 Scripts disponibles

## Desarrollo

```bash
npm start
```

Inicia el servidor de desarrollo.

## Producción

```bash
npm run build
```

Genera el bundle optimizado para despliegue.

---

# 🧩 Componentes destacados

## MundoPatrimonial

Representa visualmente el crecimiento del patrimonio mediante una progresión basada en hitos financieros.

## TarjetaInstitucion

Muestra la información consolidada de cada institución registrada.

## TutorialPortafolio

Guía interactiva de uso de la aplicación.

## EncabezadoPortafolio

Resumen general del portafolio financiero.

---

# 🎯 Objetivos del proyecto

- Fomentar el seguimiento de las finanzas personales.
- Visualizar el crecimiento patrimonial de forma intuitiva.
- Simplificar la administración de inversiones.
- Mantener una experiencia amigable para usuarios no financieros.

---

# 🔮 Funcionalidades futuras

- Persistencia de datos en base de datos.
- Autenticación de usuarios.
- Dashboard con gráficas financieras.
- Exportación de información.
- Metas de ahorro.
- Indicadores de independencia financiera.
- Versión móvil instalable (PWA).

---

# 👨‍💻 Autor

Michael Ramírez

Proyecto personal desarrollado como herramienta de seguimiento patrimonial y educación financiera.
"fechaCreacion": "2026-07-16"