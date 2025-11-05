import { useState } from 'react';
import { Menu as MenuIcon, X, Flame, MapPin, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#menu', label: 'Menu' },
    { href: '#outlet', label: 'Outlet' },
    { href: '#franchise', label: 'Franchise' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/80 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2">
            <Flame className="text-red-600" />
            <span className="font-extrabold tracking-wide text-gray-900">Padang Merdeka</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="hidden lg:flex items-center gap-4 pl-4 ml-4 border-l">
              <a href="tel:+62811188167" className="flex items-center gap-1 text-sm text-gray-700 hover:text-red-600">
                <Phone size={16} /> <span>0811-1881-67</span>
              </a>
              <a href="mailto:info@padangmerdeka.com" className="flex items-center gap-1 text-sm text-gray-700 hover:text-red-600">
                <Mail size={16} /> <span>info@padangmerdeka.com</span>
              </a>
              <span className="hidden xl:flex items-center gap-1 text-sm text-gray-700">
                <MapPin size={16} /> Indonesia
              </span>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
          >
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t grid grid-cols-1 gap-2">
              <a href="tel:+62811188167" className="flex items-center gap-2 text-sm text-gray-700">
                <Phone size={16} /> 0811-1881-67
              </a>
              <a href="mailto:info@padangmerdeka.com" className="flex items-center gap-2 text-sm text-gray-700">
                <Mail size={16} /> info@padangmerdeka.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
