import Image from "next/image";

const rooms = [
  {
    name: "Deluxe Room",
    price: "₦18,000/night",
    image: "/rooms/room-2.webp",
    desc: "Spacious room with city view, king-size bed and modern amenities.",
  },
  {
    name: "Executive Suite",
    price: "₦25,000/night",
    image: "/rooms/room-1.webp",
    desc: "Luxury suite with lounge area, premium comfort and balcony view.",
  },
  {
    name: "Standard Room",
    price: "₦30,000/night",
    image: "/rooms/room-3.jpg",
    desc: "Comfortable and affordable room perfect for short stays.",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Rooms
          </h2>

          <p className="mt-3 text-slate-600">
            Choose from our selection of premium accommodations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{room.name}</h3>

                <p className="mt-2 text-sm text-slate-600">
                  {room.desc}
                </p>

                <p className="mt-4 font-bold text-slate-900">
                  {room.price}
                </p>

                <a
                  href="#contact"
                  className="mt-4 block w-full rounded-lg bg-[#D4A373] py-2 text-center font-semibold text-black transition hover:bg-[#C08A5C]"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}                                                                                                                                                                                                                                                                                                   