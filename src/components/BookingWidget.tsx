"use client";

import { useState } from "react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [guests, setGuests] = useState("1");

  const handleBooking = () => {
    const message = `Hello VNN Hotel,

I would like to make a reservation.

Room Type: ${roomType}
Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}

Please let me know availability.`;

    const whatsappUrl =
      `https://wa.me/2348145458745?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            Make a Reservation
          </h2>

          <p className="mt-2 text-slate-300">
            Submit your preferred dates and we'll confirm availability.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm">
                Check-In
              </label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Check-Out
              </label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Room Type
              </label>

              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              >
                <option>Deluxe Room</option>
                <option>Executive Room</option>
                <option>Presidential Suite</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Guests
              </label>

              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

          </div>

          <button
            onClick={handleBooking}
            className="mt-8 rounded-lg bg-[#D4A373] px-8 py-3 font-semibold text-black transition hover:bg-[#C08A5C]"
          >
            Check Availability
          </button>

        </div>

      </div>
    </section>
  );
}