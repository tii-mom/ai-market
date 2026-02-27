import { useState } from 'react';
import Home from './components/Home';
import Trade from './components/Trade';
import Intel from './components/Intel';
import Risk from './components/Risk';
import Security from './components/Security';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'trade': return <Trade />;
      case 'intel': return <Intel />;
      case 'risk': return <Risk />;
      case 'security': return <Security />;
      default: return <Home />;
    }
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto border-x border-white/5 shadow-2xl bg-background-dark pb-20">
      {renderContent()}
      
      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-lg px-6 pb-6 pt-3 z-50 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <NavItem icon="home" label="Home" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavItem icon="candlestick_chart" label="Trade" isActive={activeTab === 'trade'} onClick={() => setActiveTab('trade')} />
          
          <div className="relative -top-5">
            <button 
              onClick={() => setActiveTab('intel')}
              className={`h-14 w-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(242,204,13,0.4)] border-4 border-background-dark transition-transform hover:scale-105 ${activeTab === 'intel' ? 'bg-primary text-black' : 'bg-surface-dark text-primary'}`}
            >
              <span className="material-symbols-outlined text-3xl">smart_toy</span>
            </button>
          </div>
          
          <NavItem icon="shield" label="Risk" isActive={activeTab === 'risk'} onClick={() => setActiveTab('risk')} />
          <NavItem icon="security" label="Security" isActive={activeTab === 'security'} onClick={() => setActiveTab('security')} />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: string, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary drop-shadow-[0_0_8px_rgba(242,204,13,0.5)]' : 'text-slate-500 hover:text-slate-200'}`}>
      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}
