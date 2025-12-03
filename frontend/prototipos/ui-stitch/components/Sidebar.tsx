import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface SidebarProps {
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
    const navigate = useNavigate();

  return (
    <aside className="flex flex-col w-full h-full bg-surface-light dark:bg-background-dark border-r border-white/10 dark:border-border-dark p-4">
      {/* Logo Area */}
      <div className="flex items-center gap-4 text-slate-900 dark:text-white p-2 mb-6">
        <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">CasinoRoyale</h2>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
        <NavItem to="/dashboard" icon="grid_view" label="Dashboard" onClick={onClose} />
        <NavItem to="/games" icon="casino" label="All Games" onClick={onClose} />
        <NavItem to="/games?filter=live" icon="live_tv" label="Live Casino" onClick={onClose} />
        <NavItem to="/wallet" icon="account_balance_wallet" label="Wallet" onClick={onClose} />
        <NavItem to="/profile" icon="person" label="Profile" onClick={onClose} />
        <NavItem to="/promotions" icon="confirmation_number" label="Promotions" onClick={onClose} />
        <NavItem to="/vip" icon="military_tech" label="VIP Club" onClick={onClose} />
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-black/5 dark:border-white/10">
         <NavItem to="/support" icon="support_agent" label="Support" onClick={onClose} />
         <button 
            onClick={() => {
                navigate('/login');
                onClose();
            }}
            className="flex w-full items-center gap-3 px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-gray-400 hover:text-red-500 transition-colors"
         >
            <span className="material-symbols-outlined text-xl">logout</span>
            <p className="text-sm font-medium leading-normal">Log Out</p>
         </button>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label, onClick }: { to: string; icon: string; label: string; onClick?: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2.5 rounded-full transition-colors ${
        isActive
          ? 'bg-primary/15 text-primary dark:bg-primary/20 dark:text-white'
          : 'text-slate-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
      }`
    }
  >
    <span className={`material-symbols-outlined text-xl`}>{icon}</span>
    <p className="text-sm font-medium leading-normal">{label}</p>
  </NavLink>
);

export default Sidebar;