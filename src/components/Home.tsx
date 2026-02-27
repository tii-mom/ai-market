export default function Home() {
  return (
    <div className="flex flex-col w-full h-full animate-in fade-in duration-300">
      <header className="flex items-center justify-between p-4 pt-6 sticky top-0 z-40 bg-background-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/20">
            <span className="material-symbols-outlined text-2xl">smart_toy</span>
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-white">AI Command Center</h2>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-xs font-bold text-green-500 uppercase tracking-widest">RUNNING</p>
            </div>
          </div>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <span className="material-symbols-outlined text-xl text-slate-400">settings</span>
        </button>
      </header>

      <div className="px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between rounded-lg bg-surface-dark border border-white/5 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">radar</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Scanned</span>
            </div>
            <span className="font-mono text-sm font-bold text-white">4,289</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-surface-dark border border-white/5 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-accent-red">local_fire_department</span>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Heat</span>
            </div>
            <span className="font-mono text-sm font-bold text-accent-red">88%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-6 px-4 text-center mt-2 mb-4">
        <h1 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">Today AI Profit</h1>
        <div className="relative group cursor-pointer active:scale-95 transition-transform duration-200">
          <h2 className="text-7xl font-black tracking-tighter text-accent-blue text-glow-blue leading-none py-2">
            +12.5%
          </h2>
          <div className="absolute -right-4 top-0 rotate-12 rounded bg-primary px-2 py-0.5 text-[10px] font-bold text-background-dark shadow-[0_0_10px_rgba(242,204,13,0.5)]">REALIZED</div>
        </div>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 border border-blue-500/20">
          <span className="material-symbols-outlined text-xs text-accent-blue">trending_up</span>
          <p className="text-sm font-bold text-slate-300 font-mono">+$1,240.55 (24h)</p>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="relative overflow-hidden rounded-2xl bg-surface-dark border border-white/10 p-5 shadow-2xl">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-accent-blue/5 blur-3xl"></div>
          <div className="mb-4 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary/80">Current Action</h3>
            </div>
            <span className="rounded bg-primary/10 border border-primary/20 px-2 py-0.5 text-[9px] font-bold text-primary tracking-wide">LIVE LOGS</span>
          </div>
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-tight">Analyzing $PEPE</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Volume spike detected on 5m chart. Calculating entry probability.</p>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="flex items-start gap-3 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
                <span className="material-symbols-outlined text-lg">shopping_cart</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Buying Dip on $WIF</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Order executed at $2.45.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="text-sm font-bold tracking-wider uppercase text-slate-500">Today's Battle Report</h3>
          <button className="text-[10px] font-bold text-primary hover:text-white transition-colors">VIEW ALL</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 no-scrollbar">
          <div className="min-w-[150px] rounded-xl bg-surface-dark p-4 border border-white/5 border-l-4 border-l-green-500 shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-base text-white">$BONK</span>
              <span className="material-symbols-outlined text-green-500 text-base">trending_up</span>
            </div>
            <p className="text-2xl font-black text-green-500">+45%</p>
            <p className="text-[10px] font-mono text-slate-400 mt-1">+$420.00</p>
          </div>
          <div className="min-w-[150px] rounded-xl bg-surface-dark p-4 border border-white/5 border-l-4 border-l-accent-red shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-base text-white">$SLERF</span>
              <span className="material-symbols-outlined text-accent-red text-base">trending_down</span>
            </div>
            <p className="text-2xl font-black text-accent-red">-12%</p>
            <p className="text-[10px] font-mono text-slate-400 mt-1">Stop Loss</p>
          </div>
          <div className="min-w-[150px] rounded-xl bg-surface-dark p-4 border border-white/5 border-l-4 border-l-green-500 shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-base text-white">$MOG</span>
              <span className="material-symbols-outlined text-green-500 text-base">trending_up</span>
            </div>
            <p className="text-2xl font-black text-green-500">+8.2%</p>
            <p className="text-[10px] font-mono text-slate-400 mt-1">+$85.50</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8">
        <button className="w-full rounded-xl bg-primary py-4 font-bold text-background-dark shadow-[0_0_25px_rgba(242,204,13,0.3)] hover:bg-[#ffe144] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-lg uppercase tracking-wider border-2 border-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>pause</span>
          Pause AI Engine
        </button>
      </div>
    </div>
  );
}
