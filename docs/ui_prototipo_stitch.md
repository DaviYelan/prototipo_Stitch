🎨 Prototipo UI – Aplicación de Casino Online (Stitch)

Este documento describe el flujo principal del prototipo diseñado en Stitch, junto con la especificación de cada una de las pantallas requeridas: propósito, componentes, estructura y referencia a capturas incluidas en /docs/img/.

🔁 1. Flujo General del Usuario

El prototipo cubre el flujo completo dentro de la aplicación:

Splash Screen → Identidad visual inicial

Login → Acceso del usuario

Registro → Creación de cuenta

Dashboard → Centro principal y acceso a juegos

Selección de Juego → Lista de juegos disponibles

Interfaz de Juego → Base visual del juego seleccionado

Billetera → Gestión de saldo (depósitos, retiros, historial)

Perfil / Configuración → Ajustes, datos y preferencias

Este flujo garantiza una navegación clara desde la entrada a la app hasta la experiencia de juego y administración del perfil.

🖼️ 2. Pantallas del Prototipo

A continuación se presentan las 8 pantallas con su descripción detallada.

🌟 Pantalla 1 – Splash Screen

📌 Propósito:
Introducir la marca y mostrar un breve cargador antes de la app.

🧩 Componentes:

Logotipo principal

Indicador de carga

Fondo adaptable a modo claro/oscuro

🖼️ Captura:
/docs/img/splash.png

🔐 Pantalla 2 – Login

📌 Propósito:
Permitir que el usuario acceda con sus credenciales.

🧩 Componentes:

Formulario: email + contraseña

Botón Iniciar sesión

Botón secundario Registrarse

Enlace “¿Olvidaste tu contraseña?”

Toggle para modo claro/oscuro

🖼️ Captura:
/docs/img/login.png

📝 Pantalla 3 – Registro

📌 Propósito:
Crear una nueva cuenta dentro de la aplicación.

🧩 Componentes:

Formulario con datos básicos

Botón Crear cuenta

Botón Volver al login

Mensajes de error y validación

🖼️ Captura:
/docs/img/registro.png

🏠 Pantalla 4 – Dashboard Principal

📌 Propósito:
Actuar como punto central de navegación hacia todos los juegos y secciones.

🧩 Componentes:

Navbar + menú lateral

Cards de juegos

Indicador de saldo

Categorías y filtros

Botones CTA Jugar

🖼️ Captura:
/docs/img/dashboard.png

🎮 Pantalla 5 – Selección de Juego

📌 Propósito:
Presentar la lista de juegos disponibles dentro de una categoría.

🧩 Componentes:

Grid/lista de juegos

Imagen + nombre + CTA

Filtros por tipo de juego

Cards responsivas

🖼️ Captura:
/docs/img/seleccion_juego.png

🃏 Pantalla 6 – Interfaz de Juego

📌 Propósito:
Mostrar la estructura base donde se desarrollaría el juego seleccionado.

🧩 Componentes:

Área central del juego

Botones de acción (Apostar, Retirar, etc.)

Saldo visible

Barra superior de navegación

🖼️ Captura:
/docs/img/juego.png

💰 Pantalla 7 – Billetera

📌 Propósito:
Gestionar los movimientos económicos del usuario.

🧩 Componentes:

Saldo actual

Botones Depositar / Retirar

Historial de movimientos

Formularios en pop-up

🖼️ Captura:
/docs/img/billetera.png

👤 Pantalla 8 – Perfil / Configuración

📌 Propósito:
Mostrar información del usuario y permitir configurar la aplicación.

🧩 Componentes:

Avatar y datos del perfil

Preferencias (modo oscuro, notificaciones, idioma)

Botón Editar perfil

Botón Cerrar sesión

🖼️ Captura:
/docs/img/perfil_config.png
