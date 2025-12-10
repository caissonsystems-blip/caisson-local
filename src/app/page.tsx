export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-mt-20 text-8xl font-black tracking-tighter drop-shadow-2xl">
        CAISSON OS
      </h1>
      <p className="mt-8 text-3xl font-light opacity-90">Bid Manager + CRM</p>
      <p className="mt-16 text-xl opacity-70">Built for the trades. By the trades.</p>
      <div className="mt-20 flex gap-8">
        <div className="h-32 w-32 rounded-xl bg-blue-600"></div>
        <div className="h-32 w-32 rounded-xl bg-amber-500"></div>
        <div className="h-32 w-32 rounded-xl bg-red-600"></div>
      </div>
    </div>
  );
}
