"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-white">
            VNN
            <span className="ml-1 text-[#D4A373]">
              HOTEL
            </span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#rooms"
            className="text-sm font-medium text-slate-200 transition hover:text-[#D4A373]"
          >
            Rooms
          </a>

          <a
            href="#amenities"
            className="text-sm font-medium text-slate-200 transition hover:text-[#D4A373]"
          >
            Amenities
          </a>

          <a
            href="#gallery"
            className="text-sm font-medium text-slate-200 transition hover:text-[#D4A373]"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-200 transition hover:text-[#D4A373]"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-lg bg-[#D4A373] px-5 py-2.5 font-semibold text-black transition hover:bg-[#C08A5C]"
        >
          Book Now
        </a>

      </div>
    </header>
  );
}