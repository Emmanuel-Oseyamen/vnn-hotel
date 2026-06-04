const testimonials = [
  {
    name: "John Williams",
    role: "Business Traveler",
    message:
      "My stay at VNN Hotel was exceptional. The rooms were clean, staff were friendly, and the service was top-notch.",
  },
  {
    name: "Sarah Johnson",
    role: "Tourist",
    message:
      "Beautiful hotel with amazing ambiance. I loved the restaurant and the overall experience was unforgettable.",
  },
  {
    name: "Michael Brown",
    role: "Entrepreneur",
    message:
      "Very comfortable rooms and excellent customer service. I’ll definitely be coming back on my next trip.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            What Our Guests Say
          </h2>
          <p className="mt-3 text-slate-600">
            Real feedback from satisfied guests
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
            >

              {/* Quote */}
              <p className="text-slate-600">
                “{t.message}”
              </p>

              {/* Name */}
              <div className="mt-6">
                <p className="font-semibold text-slate-900">
                  {t.name}
                </p>
                <p className="text-sm text-slate-500">
                  {t.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}