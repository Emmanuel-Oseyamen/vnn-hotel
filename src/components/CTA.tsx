export default function CTA() {
  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to Experience VNN Hotel?
        </h2>

        <p className="mt-4 text-slate-300">
          Book your stay today and enjoy comfort, luxury, and exceptional service.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">

          {/* WhatsApp Booking */}
          <a
            href="https://wa.me/2348145458745?text=Hello%20VNN%20Hotel%2C%20I%20would%20like%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400"
          >
            Book via WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+234XXXXXXXXXX"
            className="rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Call Now
          </a>

        </div>

        <p className="mt-6 text-sm text-slate-400">
          Available 24/7 for reservations and inquiries
        </p>

      </div>
    </section>
  );
}