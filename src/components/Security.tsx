export default function Security() {
  return (
    <div className="flex flex-col w-full h-full animate-in fade-in duration-300">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">shield_lock</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Security Shield</h1>
        </div>
        <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-slate-400">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-red"></span>
        </button>
      </header>

      <div className="flex-1 flex flex-col gap-6 p-4 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-[300px]">
          <div className="w-full h-[2px] bg-primary/50 shadow-[0_0_10px_rgba(242,204,13,0.8)] absolute top-0 left-0 z-10 opacity-30 animate-[scan_3s_linear_infinite]"></div>
        </div>

        <section className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-dark border border-white/10 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-primary">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 text-center font-medium">System Integrity</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-dark border border-white/10 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-3xl text-accent-blue mb-1">verified_user</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 text-center font-medium">Firewall Status</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-blue"></div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-dark border border-white/10 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-slate-200">0</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 text-center font-medium">Breaches Detected</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700"></div>
          </div>
        </section>

        <section className="relative h-48 w-full rounded-2xl overflow-hidden bg-surface-dark border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-black to-black opacity-80"></div>
          <img alt="Digital data map" className="w-full h-full object-cover opacity-30 mix-blend-screen" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                <span className="text-xs text-primary font-mono">LIVE MONITORING</span>
              </div>
              <span className="material-symbols-outlined text-slate-500 animate-pulse">wifi_tethering</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <p className="text-xs text-slate-300 font-mono">Scanning node: 192.84.x.x</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '75ms' }}></span>
                <p className="text-xs text-slate-300 font-mono">Encryption: AES-256-GCM</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white px-1">Connection Status</h3>
          <div className="flex items-center justify-between p-4 rounded-xl bg-surface-dark border border-white/5 hover:border-accent-blue/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Firewall Active</p>
                <p className="text-xs text-slate-400">Inbound traffic filtering on</p>
              </div>
            </div>
            <div className="px-2 py-1 rounded bg-accent-blue/20 text-accent-blue text-xs font-bold">ON</div>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-xl bg-surface-dark border border-white/5 hover:border-accent-blue/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <span className="material-symbols-outlined">ac_unit</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Cold Storage Sync</p>
                <p className="text-xs text-slate-400">Last synced: 2 mins ago</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-accent-blue text-lg">check_circle</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-accent-red/5 border border-accent-red/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red animate-pulse">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <p className="font-bold text-accent-red text-sm">Unauthorized Attempt Blocked</p>
                <p className="text-xs text-accent-red/70">IP 45.22.11.09 blocked from Shanghai</p>
              </div>
            </div>
            <span className="text-xs font-mono text-accent-red">14:02</span>
          </div>
        </section>

        <button className="mt-auto w-full py-4 rounded-xl bg-primary text-black font-bold text-base shadow-[0_0_20px_rgba(242,204,13,0.3)] hover:shadow-[0_0_30px_rgba(242,204,13,0.5)] transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">lock</span>
          Secure Assets Now
        </button>
      </div>
    </div>
  );
}
