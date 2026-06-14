export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden pb-20">

      {/* Hotel Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hotel-exterior.png')",
          filter: "contrast(1.15) saturate(1.1)",
        }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center text-white">

          <h1
            className="text-4xl font-bold md:text-5xl"
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,.5), 0 2px 8px rgba(0,0,0,.4)",
            }}
          >
            Welcome!
          </h1>

          <p
            className="mt-2 text-xl text-white/95 md:text-2xl"
            style={{
              textShadow: "0 2px 12px rgba(0,0,0,.5)",
            }}
          >
            to VNN Suites and Resorts
          </p>

          <p className="mt-4 text-sm uppercase tracking-[4px] text-[#D4A373] md:text-base">
            Luxury • Comfort • Excellence
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="rounded-lg bg-[#D4A373] px-6 py-3 font-semibold text-black transition hover:bg-[#C08A5C]"
            >
              Book Now
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}