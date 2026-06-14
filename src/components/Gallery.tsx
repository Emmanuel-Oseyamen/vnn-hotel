import Image from "next/image";

const images = [
  "/gallery/gallery-1.png",
  "/gallery/gallery-2.jpeg",
  "/gallery/gallery-3.jpeg",
  "/gallery/gallery-4.png",
  "/gallery/gallery-5.png",
  "/gallery/gallery-6.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Hotel Gallery
          </h2>
          <p className="mt-3 text-slate-600">
            Take a look inside VNN Hotel
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}