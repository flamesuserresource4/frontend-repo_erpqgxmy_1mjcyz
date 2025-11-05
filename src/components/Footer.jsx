import { Flame, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="text-red-500" />
            <span className="font-extrabold">Padang Merdeka</span>
          </div>
          <p className="mt-3 text-sm text-gray-400">#SekaliPadangTetapMerdeka</p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Navigasi</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#beranda" className="hover:text-white">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-white">Tentang</a></li>
            <li><a href="#menu" className="hover:text-white">Menu</a></li>
            <li><a href="#outlet" className="hover:text-white">Outlet</a></li>
            <li><a href="#franchise" className="hover:text-white">Franchise</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Kontak</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> <a href="tel:+62811188167" className="hover:text-white">0811 - 1881 - 67</a></li>
            <li className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:info@padangmerdeka.com" className="hover:text-white">info@padangmerdeka.com</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Indonesia</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Ikuti Kami</h4>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://instagram.com/padangmerdeka"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20"
            >
              <Instagram size={16} /> @padangmerdeka
            </a>
            <a
              href="https://instagram.com/nasikapaumerdeka"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20"
            >
              <Instagram size={16} /> @nasikapaumerdeka
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Padang Merdeka. All rights reserved.
      </div>
    </footer>
  );
}
