export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-white to-sky-50">
      {/* Background building image – subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white via-white/70 to-transparent" />
        <img
          src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2346"
          alt="Building background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="z-10 text-center px-8">
        {/* Logo + Company Name */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <img src="/logo.png" alt="Caisson Systems Logo" className="h-48 w-48 drop-shadow-2xl md:h-64 md:w-64" />
          <div className="text-left">
            <h1 className="text-6xl font-black text-gray-900 md:text-8xl">Caisson</h1>
            <p className="text-4xl font-light text-gray-700 md:text-6xl">SYSTEMS, INC.</p>
          </div>
        </div>

        {/* Tagline */}
        <h2 className="mt-16 text-4xl font-bold text-gray-800 md:mt-24 md:text-6xl">
          The All-in-One OS for
        </h2>
        <h2 className="text-5xl font-black text-blue-700 md:text-7xl">
          Mission-Critical Construction
        </h2>

        {/* Coming soon */}
        <p className="mt-20 text-2xl font-medium text-gray-600">
          Launching 2026 — Built for GCs and Trade Partners who demand more.
        </p>
      </div>
    </div>
  );
}