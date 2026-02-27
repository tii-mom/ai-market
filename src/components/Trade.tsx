export default function Trade() {
  return (
    <div className="flex flex-col w-full h-full animate-in fade-in duration-300">
      <header className="flex items-center justify-between px-4 py-3 bg-background-dark z-10 sticky top-0">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-sm font-bold tracking-widest text-slate-400 uppercase">PEPE / USD</h1>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-green-500 font-medium">Live Market</span>
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <div className="px-6 py-6 text-center">
        <div className="text-6xl font-bold tracking-tighter text-accent-blue mb-1">$0.00420</div>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 font-medium">+12.5%</span>
          <span className="text-slate-500">24h Volume: $42M</span>
        </div>
      </div>

      <div className="px-4 mb-8">
        <div className="flex justify-between text-xs font-bold tracking-wider mb-2 text-slate-400">
          <span className="text-accent-blue">BUY PRESSURE</span>
          <span className="text-accent-red">SELL WALL</span>
        </div>
        <div className="h-3 w-full bg-surface-dark rounded-full overflow-hidden flex relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-background-dark z-10"></div>
          <div className="h-full bg-accent-blue w-[62%] rounded-l-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <div className="h-full bg-accent-red w-[38%] rounded-r-full opacity-60"></div>
        </div>
      </div>

      <div className="h-40 mx-4 mb-6 relative rounded-xl bg-gradient-to-b from-accent-blue/5 to-transparent border border-white/5 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="rgba(59, 130, 246, 0.2)" fillOpacity="1"></path>
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192" fill="none" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="2"></path>
        </svg>
        <div className="absolute top-3 left-3 px-2 py-1 bg-background-dark/80 rounded text-[10px] text-slate-400 border border-white/5 backdrop-blur-sm">
          1H Interval
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 mb-6">
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-wider">Market Bids</div>
          <OrderRow price="0.00418" amount="425K" width="80%" type="bid" />
          <OrderRow price="0.00416" amount="310K" width="65%" type="bid" />
          <OrderRow price="0.00412" amount="150K" width="45%" type="bid" />
          <OrderRow price="0.00410" amount="890K" width="90%" type="bid" />
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-wider text-right">Market Asks</div>
          <OrderRow price="0.00422" amount="120K" width="30%" type="ask" />
          <OrderRow price="0.00425" amount="245K" width="55%" type="ask" />
          <OrderRow price="0.00428" amount="180K" width="40%" type="ask" />
          <OrderRow price="0.00430" amount="45K" width="15%" type="ask" />
        </div>
      </div>

      <div className="px-4 space-y-3">
        <div className="bg-surface-dark rounded-xl p-4 border border-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400">You Pay</span>
            <span className="text-xs text-primary font-medium">Balance: 1,204.00 USD</span>
          </div>
          <div className="flex justify-between items-center">
            <input className="bg-transparent text-2xl font-bold text-white w-full focus:outline-none border-none p-0 focus:ring-0 placeholder-slate-600" placeholder="0.00" type="text" defaultValue="100" />
            <div className="flex items-center gap-2 bg-surface-highlight px-2 py-1 rounded-lg">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold text-black">$</div>
              <span className="font-bold text-sm">USD</span>
              <span className="material-symbols-outlined text-sm text-slate-400">expand_more</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center -my-5 z-10 relative pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-background-dark border-4 border-background-dark flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined text-sm">arrow_downward</span>
          </div>
        </div>
        
        <div className="bg-surface-dark rounded-xl p-4 border border-white/5 pt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400">You Receive</span>
            <span className="text-xs text-slate-500">Est.</span>
          </div>
          <div className="flex justify-between items-center">
            <input className="bg-transparent text-2xl font-bold text-accent-blue w-full focus:outline-none border-none p-0 focus:ring-0 placeholder-slate-600" readOnly type="text" value="23,809.52" />
            <div className="flex items-center gap-2 bg-surface-highlight px-2 py-1 rounded-lg">
              <div className="w-5 h-5 rounded-full bg-black border border-slate-700 overflow-hidden flex items-center justify-center">
                <span className="text-[10px]">🐸</span>
              </div>
              <span className="font-bold text-sm">PEPE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Network Fee</span>
          <span className="text-slate-300">~$1.20</span>
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <span>Slippage Tolerance</span>
          <span className="text-primary">Auto (0.5%)</span>
        </div>
      </div>

      <div className="px-4 pb-6">
        <button className="w-full bg-primary text-background-dark h-14 rounded-xl font-bold text-lg tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(242,204,13,0.3)] flex items-center justify-center gap-2">
          <span>CONFIRM SWAP</span>
          <span className="material-symbols-outlined text-xl">bolt</span>
        </button>
      </div>
    </div>
  );
}

function OrderRow({ price, amount, width, type }: { price: string, amount: string, width: string, type: 'bid' | 'ask' }) {
  const isBid = type === 'bid';
  return (
    <div className="flex items-center justify-between text-xs h-6 relative group cursor-pointer">
      <div className={`absolute ${isBid ? 'right-0 rounded-l bg-accent-blue/10' : 'left-0 rounded-r bg-accent-red/10'}`} style={{ width }}></div>
      {isBid ? (
        <>
          <span className="text-slate-300 z-10 pl-2">{price}</span>
          <span className="text-accent-blue z-10 pr-2 font-medium">{amount}</span>
        </>
      ) : (
        <>
          <span className="text-accent-red z-10 pl-2 font-medium">{amount}</span>
          <span className="text-slate-300 z-10 pr-2">{price}</span>
        </>
      )}
    </div>
  );
}
