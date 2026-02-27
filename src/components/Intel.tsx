export default function Intel() {
  return (
    <div className="flex flex-col w-full h-full animate-in fade-in duration-300">
      <header className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-md border-b border-surface-highlight px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white leading-none">AI Market Intel</h1>
              <span className="text-[10px] text-accent-blue font-mono tracking-widest uppercase">System Online</span>
            </div>
          </div>
          <button className="relative p-2 rounded-full hover:bg-surface-highlight transition-colors group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          </button>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-500 group-focus-within:text-accent-blue transition-colors">smart_toy</span>
          </div>
          <input className="block w-full pl-10 pr-3 py-3 border border-surface-highlight rounded-xl leading-5 bg-surface-dark text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue sm:text-sm transition-all shadow-inner font-mono text-xs" placeholder="Ask AI about token sentiment..." type="text" />
        </div>
      </header>

      <div className="px-4 py-6 space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-dark border border-surface-highlight rounded-xl p-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-1 opacity-10">
              <span className="material-symbols-outlined text-4xl text-accent-blue">radar</span>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Market Sentiment</p>
            <p className="text-2xl font-bold text-white flex items-center gap-2">
              Bullish
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            </p>
            <p className="text-xs text-accent-blue mt-1 font-mono">AI Confidence: 89%</p>
          </div>
          <div className="bg-surface-dark border border-surface-highlight rounded-xl p-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-1 opacity-10">
              <span className="material-symbols-outlined text-4xl text-primary">local_fire_department</span>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Meme Heat</p>
            <p className="text-2xl font-bold text-white">Critical</p>
            <p className="text-xs text-primary mt-1 font-mono">Vol Spike Detected</p>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">tune</span> AI Filters
          </h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            <button className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-accent-blue/10 border border-accent-blue text-accent-blue font-bold text-xs shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              High AI Interest
            </button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-surface-dark text-slate-400 font-medium text-xs border border-surface-highlight hover:border-slate-600 transition-colors">
              Volatility Alert
            </button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-surface-dark text-slate-400 font-medium text-xs border border-surface-highlight hover:border-slate-600 transition-colors">
              Social Surge
            </button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-surface-dark text-slate-400 font-medium text-xs border border-surface-highlight hover:border-slate-600 transition-colors">
              Whale Watch
            </button>
          </div>
        </div>

        <div className="flex justify-between items-end border-b border-surface-highlight pb-2">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">auto_awesome</span>
            Curated Feed
          </h2>
          <span className="text-xs text-accent-blue flex items-center gap-1 font-mono">
            <span className="material-symbols-outlined text-[10px] animate-spin">sync</span>
            Analyzing...
          </span>
        </div>

        <div className="space-y-4">
          <FeedItem 
            symbol="PEPE" 
            name="PepeCoin" 
            tag="#Meme" 
            change="+12.4%" 
            score="94%" 
            heat="EXTREME" 
            sentiment="Hyper-Viral" 
            volume="Accumulating" 
            volatility="HIGH ACTIVITY" 
            volatilityColor="bg-accent-red"
            volatilityLevel={8}
          />
          <FeedItem 
            symbol="WIF" 
            name="dogwifhat" 
            tag="#Solana" 
            change="-2.1%" 
            score="72%" 
            heat="MODERATE" 
            sentiment="Stabilizing" 
            volume="Declining" 
            volatility="NORMAL" 
            volatilityColor="bg-slate-500"
            volatilityLevel={3}
            isNegative
          />
          <FeedItem 
            symbol="BONK" 
            name="Bonk" 
            tag="#Dog" 
            change="+5.8%" 
            score="88%" 
            heat="RISING" 
            sentiment="Influencer Hype" 
            volume="Surging" 
            volatility="ELEVATED" 
            volatilityColor="bg-accent-red"
            volatilityLevel={5}
          />
        </div>
      </div>
    </div>
  );
}

function FeedItem({ symbol, name, tag, change, score, heat, sentiment, volume, volatility, volatilityColor, volatilityLevel, isNegative = false }: any) {
  return (
    <div className="group relative bg-surface-dark rounded-xl p-0 border border-surface-highlight hover:border-accent-blue/50 transition-all duration-300 overflow-hidden">
      {score === '94%' && <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl -mr-10 -mt-10"></div>}
      <div className="px-4 py-3 bg-surface-highlight/30 flex justify-between items-center border-b border-surface-highlight/50">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">AI Interest Score</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-white font-mono">{score}</span>
          <span className="flex h-2 w-2 relative">
            {score === '94%' || score === '88%' ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
              </>
            ) : (
              <span className="inline-flex rounded-full h-2 w-2 bg-slate-600"></span>
            )}
          </span>
        </div>
      </div>
      <div className="p-4 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-900/50 to-slate-900 flex items-center justify-center border border-white/10 shadow-lg relative">
              <span className="font-bold text-accent-blue text-sm">{symbol}</span>
              <div className="absolute -bottom-1 -right-1 bg-surface-dark rounded-full p-0.5 border border-surface-highlight">
                <span className="material-symbols-outlined text-[14px] text-primary">
                  {isNegative ? 'trending_down' : (heat === 'EXTREME' ? 'local_fire_department' : 'trending_up')}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg leading-tight">{name}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-mono text-slate-400 bg-surface-highlight px-1.5 rounded">{tag}</span>
                <span className={`text-[10px] font-mono ${isNegative ? 'text-red-400' : 'text-green-400'}`}>{change} (24h)</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-surface-highlight rounded px-2 py-1 inline-block">
              <p className="text-[10px] text-slate-400 font-mono uppercase">Heat Rating</p>
              <p className={`text-xs font-bold ${heat === 'EXTREME' ? 'text-primary' : (heat === 'MODERATE' ? 'text-slate-300' : 'text-accent-blue')}`}>{heat}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-black/40 rounded p-2 border border-white/5">
            <span className="text-[10px] text-slate-500 block mb-1">Sentiment Analysis</span>
            <p className="text-xs text-white font-medium">{sentiment}</p>
          </div>
          <div className="bg-black/40 rounded p-2 border border-white/5">
            <span className="text-[10px] text-slate-500 block mb-1">Volume Trend</span>
            <p className={`text-xs font-medium ${isNegative ? 'text-red-400' : 'text-green-400'}`}>{volume}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase">AI Volatility Detection</span>
            <span className={`text-[10px] font-bold ${volatilityColor} text-transparent bg-clip-text ${volatilityLevel > 5 ? 'animate-pulse' : ''}`}>{volatility}</span>
          </div>
          <div className="h-2 bg-surface-highlight rounded-full overflow-hidden flex gap-0.5">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`flex-1 ${i < volatilityLevel ? volatilityColor : 'bg-transparent'} rounded-sm opacity-${30 + (i * 10)} ${i === volatilityLevel - 1 && volatilityLevel > 5 ? 'shadow-[0_0_10px_#ef4444]' : ''}`}></div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-surface-highlight hover:bg-surface-highlight/80 text-white font-medium py-2.5 rounded-lg text-xs uppercase tracking-wide transition-colors border border-surface-highlight">
            Details
          </button>
          <button className="flex-[2] bg-primary hover:bg-yellow-400 text-black font-bold py-2.5 rounded-lg text-xs uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(242,204,13,0.15)]">
            <span className="material-symbols-outlined text-base">bolt</span>
            Quick Trade
          </button>
        </div>
      </div>
    </div>
  );
}
