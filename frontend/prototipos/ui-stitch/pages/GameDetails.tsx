import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GameDetails: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 text-sm lg:text-base mb-6">
        <Link to="/dashboard" className="text-slate-500 dark:text-[#ad92c9] font-medium leading-normal hover:underline">Juegos</Link>
        <span className="text-slate-500 dark:text-[#ad92c9] font-medium leading-normal">/</span>
        <Link to="/games" className="text-slate-500 dark:text-[#ad92c9] font-medium leading-normal hover:underline">Tragamonedas</Link>
        <span className="text-slate-500 dark:text-[#ad92c9] font-medium leading-normal">/</span>
        <span className="text-slate-900 dark:text-white font-medium leading-normal">Gates of Olympus</span>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        {/* Game Preview */}
        <div className="flex flex-col gap-4">
          <div 
            className="relative flex items-center justify-center bg-cover bg-center aspect-video rounded-lg lg:rounded-xl overflow-hidden shadow-2xl" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPe4bXwU8Oa7szL5rALMKMrsj0qA5cng7pkR5KT2YAJcz_HojFCV4xFiiclY7PfRm2eLyY-t4V6eAfngmMMiMwBzeQUaEkrlW4jmZQfJATcCw5yMxID35tw7GJ2h13_NyKpAdsCPWDHBygHk7XrSZBN4-ljQW-cBE4LipRi1K9C6baDxlae3-e39jdokqpz4-SxsnwtaK3CEhvMKYmsjYrTyr8VhRZ01MAZH-EuZkvNTcaNMmJPi8ohwPk-GTYE0Hd2j61_D46amJQ")' }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <button 
                onClick={() => navigate('/play/gates-of-olympus')}
                className="relative z-10 flex shrink-0 items-center justify-center rounded-full size-16 md:size-20 bg-primary/90 text-white hover:bg-primary transition-all backdrop-blur-sm shadow-xl shadow-primary/30 hover:scale-105"
            >
              <span className="material-symbols-outlined text-4xl md:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
          </div>
        </div>

        {/* Game Info */}
        <div className="flex flex-col mt-6 lg:mt-0">
          <div className="flex justify-between items-start gap-4">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Gates of Olympus</h1>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center size-11 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </button>
              <button className="flex items-center justify-center size-11 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-2xl">share</span>
              </button>
            </div>
          </div>

          <div className="mt-6 border-b border-black/10 dark:border-white/10">
            <div className="flex gap-6">
              <button className="py-3 border-b-2 border-primary text-primary font-semibold text-sm">Descripción</button>
              <button className="py-3 border-b-2 border-transparent text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white font-semibold text-sm transition-colors">Reglas del Juego</button>
              <button className="py-3 border-b-2 border-transparent text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white font-semibold text-sm transition-colors">Detalles</button>
            </div>
          </div>

          <div className="mt-6 text-slate-700 dark:text-white/80 text-base leading-relaxed">
            <p>Sumérgete en el mítico mundo de los dioses griegos con Gates of Olympus. Esta tragamonedas de alta volatilidad ofrece una experiencia de juego emocionante con multiplicadores, giros gratis y la posibilidad de ganar hasta 5,000 veces tu apuesta. ¡Abre las puertas del Olimpo y busca tu fortuna!</p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-white/80 mb-2" htmlFor="bet-limit">Límite de Apuesta</label>
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-slate-900 dark:text-white">$0.20</span>
                <input 
                    className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" 
                    id="bet-limit" 
                    max="100" 
                    min="0.20" 
                    step="0.1" 
                    type="range" 
                    defaultValue="25"
                />
                <span className="text-sm font-mono text-slate-900 dark:text-white">$100.00</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-white/80 mb-2" htmlFor="pay-lines">Líneas de Pago</label>
              <select className="w-full bg-slate-50 dark:bg-[#362348] border-slate-200 dark:border-white/20 rounded-lg text-slate-900 dark:text-white focus:ring-primary focus:border-primary py-2.5" id="pay-lines">
                <option>20 Líneas</option>
                <option>Pago por Clúster</option>
                <option selected>Paga en Cualquier Lugar</option>
              </select>
            </div>
          </div>

          <div className="mt-10">
            <button 
                onClick={() => navigate('/play/gates-of-olympus')}
                className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-primary text-white text-lg font-bold leading-normal tracking-wide hover:bg-primary/90 transition-transform active:scale-[0.99] shadow-lg shadow-primary/25"
            >
              <span className="truncate">JUGAR AHORA</span>
            </button>
          </div>

          <div className="mt-8 p-4 bg-slate-100 dark:bg-white/5 rounded-lg flex justify-between items-center text-sm border border-slate-200 dark:border-white/5">
            <span className="text-slate-600 dark:text-white/60">Proveedor: <strong className="text-slate-900 dark:text-white font-semibold">Pragmatic Play</strong></span>
            <div className="flex items-center gap-1 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-base text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-semibold">4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;