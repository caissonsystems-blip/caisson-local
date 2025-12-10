export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* Big badass logo/text */}
      <h1 className="mb-8 text-8xl font-black tracking-tighter text-white drop-shadow-2xl md:text-9xl">
        CAISSON
      </h1>
      <h2 className="mb-4 text-6xl font-black text-amber-500 drop-shadow-lg md:text-7xl">
        OS
      </h2>

      <p className="mt-12 max-w-2xl text-center text-2xl font-light text-gray-400">
        Bid Manager + CRM built for the trades, by the trades
      </p>

      <div className="mt-20 flex gap-12">
        <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl"></div>
        <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl"></div>
        <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-2xl"></div>
      </div>

      <p className="mt-20 text-sm uppercase tracking-widest text-gray-600">
        Coming 2026 — Get ready
      </p>
    </div>
  );
}