export default function Risk() {
  return (
    <div className="flex flex-col w-full h-full animate-in fade-in duration-300">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none z-0"></div>
      
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-dark/90 backdrop-blur-md px-4 py-4 border-b border-white/10">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-100 hover:bg-white/10 active:scale-95 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold uppercase tracking-widest text-white/80">Control Center</h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark border border-primary/30 text-primary hover:bg-primary/10 active:scale-95 transition-all">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <div className="p-4 flex flex-col gap-6 relative z-10">
        <div className="bg-surface-dark border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -ml-10 -mb-10"></div>
          
          <div className="flex justify-between items-end mb-4 relative z-10">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">AI Stability Index</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white glow-text">87</span>
                <span className="text-xl text-slate-500 font-light">/100</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">System Risk</p>
              <span className="text-3xl font-bold text-accent-cyan tracking-tight">LOW</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold">
              <span className="text-primary flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AI Guard Active
              </span>
              <span className="text-slate-500 font-mono">SECURE_MODE_V.2.4</span>
            </div>
            <div className="h-3 w-full bg-black/50 rounded-full border border-white/10 overflow-hidden relative">
              <div className="h-full w-[87%] bg-gradient-to-r from-accent-cyan via-blue-400 to-primary rounded-full relative shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-surface-dark border border-white/10 rounded-xl p-4 relative group hover:border-accent-pink/50 transition-colors">
            <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-accent-pink glow-red"></div>
            <div className="flex flex-col items-center justify-center gap-3 py-2">
              <div className="relative h-20 w-20">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-white/5 stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeWidth="6"></circle>
                  <circle className="text-accent-pink stroke-current drop-shadow-[0_0_3px_rgba(255,42,109,0.6)]" cx="50" cy="50" fill="transparent" r="42" strokeDasharray="263.8" strokeDashoffset="232.1" strokeLinecap="butt" strokeWidth="6" style={{ transition: 'stroke-dashoffset 0.35s' }}></circle> 
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-white">12%</span>
                </div>
              </div>
              <div className="text-center w-full">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Drawdown</h3>
                <div className="mt-2 h-[1px] w-1/2 mx-auto bg-white/10"></div>
                <p className="text-[10px] text-slate-500 mt-2 font-mono">HARD_LIMIT</p>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 bg-surface-dark border border-white/10 rounded-xl p-4 relative group hover:border-accent-cyan/50 transition-colors">
            <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-accent-cyan glow-blue"></div>
            <div className="flex flex-col items-center justify-center gap-3 py-2">
              <div className="relative h-20 w-20">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-white/5 stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeWidth="6"></circle>
                  <circle className="text-accent-cyan stroke-current drop-shadow-[0_0_3px_rgba(0,240,255,0.6)]" cx="50" cy="50" fill="transparent" r="42" strokeDasharray="263.8" strokeDashoffset="105.5" strokeLinecap="butt" strokeWidth="6" style={{ transition: 'stroke-dashoffset 0.35s' }}></circle> 
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-white">5 <span className="text-xs">SOL</span></span>
                </div>
              </div>
              <div className="text-center w-full">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Position</h3>
                <div className="mt-2 h-[1px] w-1/2 mx-auto bg-white/10"></div>
                <p className="text-[10px] text-slate-500 mt-2 font-mono">ALLOCATION</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark border border-white/10 rounded-2xl p-0 overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white">Trigger Logic</h3>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse"></span>
              <span className="text-[10px] font-mono text-primary">AUTO_ADJUST_ON</span>
            </div>
          </div>
          <div className="p-5 space-y-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            
            <div className="relative pl-2">
              <div className="flex justify-between text-xs mb-2 font-mono">
                <span className="text-slate-400">TRAILING_STOP</span>
                <span className="text-primary">-5.0%</span>
              </div>
              <div className="h-1.5 w-full bg-black/50 rounded-none overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-accent-cyan/50 to-primary w-[65%] shadow-[0_0_8px_rgba(242,204,13,0.4)]"></div>
              </div>
            </div>
            
            <div className="relative pl-2">
              <div className="flex justify-between text-xs mb-2 font-mono">
                <span className="text-slate-400">HARD_STOP_LOSS</span>
                <span className="text-accent-pink">-15.0%</span>
              </div>
              <div className="h-1.5 w-full bg-black/50 rounded-none overflow-hidden border border-white/5">
                <div className="h-full bg-accent-pink w-[30%] shadow-[0_0_8px_rgba(255,42,109,0.4)]"></div>
              </div>
            </div>
            
            <div className="relative pl-2">
              <div className="flex justify-between text-xs mb-2 font-mono">
                <span className="text-slate-400">TAKE_PROFIT</span>
                <span className="text-green-400">+40.0%</span>
              </div>
              <div className="h-1.5 w-full bg-black/50 rounded-none overflow-hidden border border-white/5">
                <div className="h-full bg-green-500 w-[80%] shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 pb-4">
          <button className="relative w-full bg-primary hover:bg-primary-dark text-black font-bold text-lg h-14 rounded-xl shadow-[0_0_20px_rgba(242,204,13,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 overflow-hidden group">
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="material-symbols-outlined">tune</span>
            ADJUST LIMITS
          </button>
          <button className="w-full bg-surface-dark border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white font-mono text-sm h-12 rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wide">
            <span className="material-symbols-outlined text-lg">restart_alt</span>
            Reset Strategy
          </button>
        </div>
      </div>
    </div>
  );
}
