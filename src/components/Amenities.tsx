import Image from "next/image";

import {
  Wifi,
  Utensils,
  Car,
  Dumbbell,
  Waves,
  Clock,
} from "lucide-react";

const amenities = [
  {
    image: "/amenities/wifi.png",
    title: "Free WiFi",
    desc: "High-speed internet throughout the hotel.",
  },
  {
    image: "/amenities/restaurant.png",
    title: "Restaurant",
    desc: "Local & continental dishes available.",
  },
  {
    image: "/amenities/parking.png",
    title: "Free Parking",
    desc: "Secure parking space for guests.",
  },
  {
    image: "/amenities/gym.png",
    title: "Fitness Center",
    desc: "Fully equipped modern gym.",
  },
  {
    image: "/amenities/pool.png",
    title: "Swimming Pool",
    desc: "Relax in our luxury outdoor pool.",
  },
  {
    image: "/amenities/service.webp",
    title: "24/7 Service",
    desc: "We’re always available for you.",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Amenities & Facilities
          </h2>
          <p className="mt-3 text-slate-600">
            Everything you need for a comfortable stay
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}