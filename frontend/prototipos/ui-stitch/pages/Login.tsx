import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboard');
    };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
      {/* Top Navbar */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:px-8 md:px-16 lg:px-24">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 py-3">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_543)">
                    <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                    <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
                    </g>
                    <defs>
                    <clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath>
                    </defs>
                </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">CasinoRoyale</h2>
          </div>
          <div className="flex flex-1 justify-end items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <a className="text-slate-600 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Juegos</a>
              <a className="text-slate-600 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Promociones</a>
            </div>
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-black/5 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined">dark_mode</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter pb-4 pt-6">Bienvenido de nuevo</h1>
          <p className="text-slate-600 dark:text-gray-400 text-center pb-8">Inicia sesión para acceder a tu cuenta.</p>
          
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label className="text-slate-800 dark:text-white text-sm font-medium leading-normal pb-2" htmlFor="email">Email o Nombre de Usuario</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-gray-500">person</span>
                <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-gray-700 bg-white/50 dark:bg-black/20 focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-gray-500 pl-12 pr-4 text-base font-normal leading-normal" 
                    id="email" 
                    placeholder="Introduce tu email o nombre de usuario" 
                    type="text" 
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-slate-800 dark:text-white text-sm font-medium leading-normal pb-2" htmlFor="password">Contraseña</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-gray-500">lock</span>
                <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-gray-700 bg-white/50 dark:bg-black/20 focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-gray-500 pl-12 pr-12 text-base font-normal leading-normal" 
                    id="password" 
                    placeholder="Introduce tu contraseña" 
                    type="password" 
                />
                <button className="absolute right-0 flex items-center justify-center h-14 w-12 text-slate-400 dark:text-gray-500 hover:text-slate-600 dark:hover:text-gray-300" type="button">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>

            <div className="text-right">
              <a className="text-primary dark:text-primary/90 text-sm font-medium leading-normal underline hover:no-underline" href="#">Olvidé mi contraseña</a>
            </div>

            <button type="submit" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-primary text-white text-base font-bold leading-normal tracking-wide mt-4 shadow-lg shadow-primary/30 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all transform active:scale-[0.98]">
              Iniciar Sesión
            </button>

            <p className="text-slate-600 dark:text-gray-400 text-center text-sm font-normal leading-normal pt-6">
              ¿No tienes una cuenta? <Link className="font-bold text-primary dark:text-primary/90 hover:underline" to="/register">Regístrate</Link>
            </p>
          </form>
        </div>
      </main>

      <footer className="w-full p-8 text-center mt-auto">
        <div className="flex justify-center items-center gap-6">
          <a className="text-slate-500 dark:text-gray-500 text-xs font-normal hover:text-primary dark:hover:text-primary/90" href="#">Términos y Condiciones</a>
          <a className="text-slate-500 dark:text-gray-500 text-xs font-normal hover:text-primary dark:hover:text-primary/90" href="#">Política de Privacidad</a>
          <a className="text-slate-500 dark:text-gray-500 text-xs font-normal hover:text-primary dark:hover:text-primary/90" href="#">Juego Responsable</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;