export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden py-20">

      {/* Hotel Background */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hotel-exterior.webp')",
          filter: "contrast(1.1) saturate(1.1)",
        }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl text-white">

          <p className="mb-4 uppercase tracking-[6px] text-[#D4A373]">
            Luxury • Comfort • Excellence
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Where Luxury Meets Exceptional Hospitality
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            Experience elegant accommodations, premium amenities,
            and personalized service in the heart of Obiaruku.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-[#D4A373] px-6 py-3 font-semibold text-black transition hover:bg-[#C08A5C]"
            >
              Book Now
            </a>

            <a
              href="#rooms"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Rooms
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}