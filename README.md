UI – Prototipo en Stitch

Este documento describe el flujo principal de la aplicación de casino online y detalla cada una de las 8 pantallas diseñadas en Stitch, incluyendo propósito, componentes esenciales y referencias a las capturas correspondientes.

1. Breve descripción del flujo

El prototipo cubre el flujo central de un usuario dentro de la app:

Splash Screen: La app se inicia y muestra la identidad visual principal.

Login: El usuario ingresa con credenciales o navega al registro.

Registro: Permite crear una cuenta nueva.

Dashboard: Muestra las categorías principales de juegos y accesos rápidos.

Selección de juego: El usuario elige un juego (poker, slots, blackjack, ruleta).

Pantalla de juego: Presenta la interfaz base donde se visualizaría el juego seleccionado.

Billetera: Permite depósitos, retiros y ver el historial.

Perfil y Configuración: Muestra datos del usuario y permite cambiar ajustes como modo claro/oscuro.

El flujo completo garantiza navegación coherente desde el inicio de sesión hasta la gestión del perfil, pasando por selección y acceso a juegos.

2. Pantallas
Pantalla 1 – Splash Screen

Propósito:
Mostrar el logotipo de la app y cargar los recursos iniciales antes de acceder al login.

Componentes principales:

Logo

Animación o indicador de carga

Fondo en modo claro/oscuro

Captura:
/docs/img/splash.png

Pantalla 2 – Login

Propósito:
Permitir que el usuario acceda a su cuenta.

Componentes principales:

Formulario (email, contraseña)

Botón Iniciar sesión

Botón Registrarse

Enlace “¿Olvidaste tu contraseña?”

Toggle modo claro/oscuro

Captura:
/docs/img/login.png

Pantalla 3 – Registro

Propósito:
Crear una nueva cuenta con datos básicos del usuario.

Componentes principales:

Formulario (nombre, email, contraseña, confirmación)

Botón Crear cuenta

Botón Volver al login

Indicadores de error o validación

Captura:
/docs/img/registro.png

Pantalla 4 – Dashboard principal

Propósito:
Ofrecer acceso rápido a los juegos y mostrar el estado del usuario (saldo, notificaciones).

Componentes principales:

Navbar + menú lateral

Cards de juegos (póker, tragamonedas, blackjack, ruleta)

Indicador de saldo

Categorías y filtros

Botones CTA (Jugar)

Captura:
/docs/img/dashboard.png

Pantalla 5 – Selección de juego

Propósito:
Listar los juegos disponibles dentro de una categoría.

Componentes principales:

Lista o grid de juegos

Cards con imagen y descripción

Botón CTA Jugar ahora

Filtros (popular, nuevos, jackpots)

Captura:
/docs/img/seleccion_juego.png

Pantalla 6 – Pantalla de juego

Propósito:
Presentar la estructura base del juego seleccionado.

Componentes principales:

Área principal del juego

Botones de acción (Apostar, Retirar, Auto-play si aplica)

Indicador de saldo actual

Barra superior con navegación

Captura:
/docs/img/juego.png

Pantalla 7 – Billetera

Propósito:
Gestionar dinero dentro de la aplicación.

Componentes principales:

Botones Depositar y Retirar

Historial de transacciones

Indicador de balance

Formulario modal para depósito/retiro

Captura:
/docs/img/billetera.png

Pantalla 8 – Perfil / Configuración

Propósito:
Mostrar información personal, ajustes y preferencias del usuario.

Componentes principales:

Datos del perfil (nombre, correo, avatar)

Opciones de configuración (modo oscuro, notificaciones, idioma)

Botón Editar perfil

Botón Cerrar sesión

Captura:
/docs/img/perfil_config.png
