import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import GameList from './pages/GameList';
import GameDetails from './pages/GameDetails';
import GamePlay from './pages/GamePlay';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Layout component to handle conditional rendering of Sidebar/Header
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register', '/'].includes(location.pathname);
  const isGamePlayPage = location.pathname.startsWith('/play/');

  // State for mobile sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isAuthPage) {
    return <>{children}</>;
  }

  if (isGamePlayPage) {
     return <>{children}</>;
  }

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
            <div 
                className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
            />
        )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/play/:id" element={<GamePlay />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;