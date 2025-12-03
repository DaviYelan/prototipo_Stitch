import React from 'react';
import { useNavigate } from 'react-router-dom';

const GamePlay: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-screen w-full bg-background-dark text-white font-game overflow-hidden">
      {/* Top Header */}
      <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-6 lg:px-10 py-3 z-10 bg-[#191022]">
        <div className="flex items-center gap-4">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Casino Deluxe</h2>
        </div>
        <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Depositar</span>
          </button>
          <div className="hidden sm:flex min-w-[84px] cursor-default items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-white/10 text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">$1,250.00</span>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8dU0hTeZsiKB1-vl2DCiZfEkShRiRZJCSufTkZyXNUnfhhiXu9-OiTz_kpL5m7768bEMuf7Y7s4s-GtCETJQGl0eYt82ANizPEpvj_bq-VYqEiSZcKSLueGSZrO9AnyUJH9Nm9DyVzGiiI1zTow9MaK_6-GbtvOYeKvFU0Ij4H2-cKyeI3pu6oqdGUVRKuYcFrAorYlw8TpZbROq-ceQWisjRYb6FaP7w_-bIKTd94kp_et8St6584Vzxot_2qukoXDf-djsCPSXc")' }}></div>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative w-full h-full">
        <div className="w-full h-full max-w-6xl mx-auto flex flex-col gap-4">
            {/* Toolbar */}
            <div className="flex justify-between gap-2 px-2 py-1">
                <div className="flex gap-2">
                    <button onClick={() => navigate('/dashboard')} className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full bg-white/5 hover:bg-white/10">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full bg-white/5 hover:bg-white/10">
                        <span className="material-symbols-outlined">info</span>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full bg-white/5 hover:bg-white/10">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full bg-white/5 hover:bg-white/10">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
            </div>

            {/* Jackpot */}
            <h1 className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center drop-shadow-[0_2px_10px_rgba(250,204,21,0.3)] animate-pulse">
                Gold Rush Jackpot: $1,500,000
            </h1>

            {/* Game Canvas / Iframe Placehoder */}
            <div className="flex-1 w-full bg-black/40 rounded-xl overflow-hidden relative border-2 border-primary/30 shadow-[0_0_50px_rgba(115,17,212,0.15)]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCizjx1wrOY7MM61ojIeNCZGUAiGit6uvm_82Dqc1dqTFJ9fjUZffm6En5lTd4CTEGNlN7zmYRCNKgi86r6heQZ1b6MegvcZeTsM5B-X2waxCZZmiwb6irvghJsjRT8yjPi8ZKxmsCkLqGgC-jq9eWk1e8WG3ilBX7zdcuRYkZ6ovMASboj38sia7Dn5mLIrv9KR-2H01P5cighKnLjJm-QAbQA9gjEe69Ou4TAaKOfTo41AwjxiAt8dh6LcCMxwbUN0pI7qdDYW4gS" 
                        alt="Slot Machine"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-md">
                    <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Saldo</p>
                    <p className="text-white text-lg sm:text-xl font-bold">$1,250.00</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-md">
                    <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Última Victoria</p>
                    <p className="text-green-400 text-lg sm:text-xl font-bold">$75.00</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-md">
                    <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Apuesta Total</p>
                    <p className="text-white text-lg sm:text-xl font-bold">$5.00</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-lg mb-2">
                 <div className="flex items-center gap-4 order-2 sm:order-1">
                    <button className="flex items-center justify-center rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                        <span className="material-symbols-outlined">remove</span>
                    </button>
                    <div className="flex flex-col items-center min-w-[60px]">
                        <span className="text-xs text-gray-400">Apuesta</span>
                        <span className="text-lg sm:text-xl font-bold text-white">$5.00</span>
                    </div>
                    <button className="flex items-center justify-center rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                        <span className="material-symbols-outlined">add</span>
                    </button>
                </div>

                <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-center">
                    <button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-full h-16 sm:h-20 px-12 bg-gradient-to-r from-primary to-purple-600 text-white text-2xl font-bold shadow-[0_0_20px_rgba(115,17,212,0.5)] hover:shadow-[0_0_30px_rgba(115,17,212,0.7)] transition-all transform hover:scale-105 active:scale-95">
                        <span className="material-symbols-outlined text-4xl group-hover:rotate-180 transition-transform duration-700">rotate_right</span>
                        <span>GIRAR</span>
                    </button>
                </div>

                <div className="flex items-center gap-2 order-3">
                    <button className="flex items-center justify-center gap-2 rounded-full h-10 sm:h-12 px-6 bg-white/10 text-gray-300 hover:bg-white/20 transition-colors hover:text-white">
                        <span className="material-symbols-outlined">autoplay</span>
                        <span className="font-semibold text-sm">Auto</span>
                    </button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default GamePlay;