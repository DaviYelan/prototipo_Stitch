import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 dark:border-border-dark px-4 sm:px-6 lg:px-10 py-3 sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <button 
            onClick={onMenuClick}
            className="lg:hidden p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
        >
            <span className="material-symbols-outlined">menu</span>
        </button>
        
        {/* Mobile Logo (hidden on lg since Sidebar has logo) */}
        <div className="lg:hidden flex items-center gap-2">
             <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">CasinoRoyale</h2>
        </div>
       
         {/* Search Bar - Hidden on small screens for simplicity */}
         <div className="hidden md:flex flex-1 max-w-md ml-4">
            <label className="flex flex-col w-full h-10">
                <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-black/5 dark:bg-white/5 border border-transparent focus-within:border-primary/50 transition-colors">
                <div className="text-gray-400 flex items-center justify-center pl-4 rounded-l-full">
                    <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                    className="flex w-full min-w-0 flex-1 bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 placeholder:text-gray-400 px-4 text-sm" 
                    placeholder="Search for a game..." 
                />
                </div>
            </label>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:flex flex-col items-end mr-2">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal">Balance</p>
            <h3 className="text-slate-900 dark:text-white text-base font-medium">$1,250.00</h3>
        </div>

        <Link to="/wallet" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 sm:h-10 px-4 bg-primary text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
          <span className="truncate">Deposit</span>
        </Link>
        
        <button className="hidden sm:flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-white transition-colors">
          <span className="material-symbols-outlined text-xl">notifications</span>
        </button>

        <Link to="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 sm:size-10 border-2 border-transparent hover:border-primary transition-colors" 
             style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUSr8c9VK1T5EC97RPKX_2T1T37Vp4f_5gxImIfJE1kPAwwKhNpsFg0RnkUH7-uAvd8VUn-0C4KDUTrYOTaXYYlmE8ptc0OLnZIUA3pepiDTytcprwhe9jvxB00knRL0EWQSw8b2VfCTeRo6pwtnRnDto811-f1z7zsRiExkN1SO4GBYnIBi3QOiOvi1xCtVrM_wYuRWLh4FWPVtE4cNPNVia0OY33wt4u4zLV4oneTU_VGLElEKkqVIRYHMn9inAiPV8tEYjouBxy")' }}>
        </Link>
      </div>
    </header>
  );
};

export default Header;