import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            VNN Hotel
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Experience luxury, comfort, and exceptional hospitality
            at the heart of the city.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#rooms" className="hover:text-white">Rooms</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact & Location
          </h3>

          <div className="mt-4 space-y-3 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+234 803 088 8480</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>contact@vnnhotel.com</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>
                No 1, Link Road,
                <br />
                Off New Sapele–Agbor / Eku Rd,
                <br />
                Obiaruku, Delta State, Nigeria
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6 text-center">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} VNN Hotel. All rights reserved.
        </p>

        <p className="mt-2 text-xs text-slate-600">
          Website concept and design by{" "}
          <a
            href="https://osasweb-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4A373] hover:underline"
          >
            Osas Web Studio
          </a>
        </p>
      </div>
    </footer>
  );
}