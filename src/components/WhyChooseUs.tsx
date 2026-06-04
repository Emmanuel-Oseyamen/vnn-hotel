import { Wifi, Utensils, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    image: "/why-choose-us/wifi.png",
    title: "Free High-Speed WiFi",
    desc: "Stay connected anywhere in the hotel with fast internet access.",
  },
  {
    image: "/why-choose-us/restaurant.png",
    title: "Restaurant & Dining",
    desc: "Enjoy local and continental dishes prepared by top chefs.",
  },
  {
    image: "/why-choose-us/security.png",
    title: "24/7 Security",
    desc: "Your safety is our priority with round-the-clock security.",
  },
  {
    image: "/why-choose-us/room-service.png",
    title: "24/7 Room Service",
    desc: "We’re always available to serve you at any time of the day.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose VNN Hotel
          </h2>
          <p className="mt-3 text-slate-600">
            Experience comfort, luxury and exceptional service
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
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