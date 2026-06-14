import {
  Wifi,
  Utensils,
  Car,
  Dumbbell,
  Building,
  Clock,
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
  },
  {
    icon: Utensils,
    title: "Restaurant",
  },
  {
    icon: Car,
    title: "Free Parking",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
  },
  {
    icon: Building,
    title: "Conference Hall",
  },
  {
    icon: Clock,
    title: "24/7 Service",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Hotel Amenities
          </h2>

          <p className="mt-3 text-slate-500">
            Everything you need for a comfortable stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3">

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-200 transition hover:bg-slate-300">
                  <Icon
                    size={38}
                    className="text-slate-900"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}