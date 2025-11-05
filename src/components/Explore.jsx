import { useMemo, useState } from 'react';
import { MapPin, Phone, Building2, Search } from 'lucide-react';

export default function Explore() {
  return (
    <section className="bg-gray-50" id="menu">
      <MenuSection />
      <OutletSection />
      <FranchiseSection />
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-semibold">
      {children}
    </span>
  );
}

function MenuSection() {
  const menus = [
    { name: 'Ayam Pop', img: 'https://images.unsplash.com/photo-1604904553318-3b138b93cbee?q=80&w=1200&auto=format&fit=crop', desc: 'Ayam lembut khas Minang dengan kuah gurih.' },
    { name: 'Rendang', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop', desc: 'Dimasak lama dengan rempah, gurih pedas meresap.', badge: "CNN’s World’s 50 best foods" },
    { name: 'Gulai Kepala Ikan', img: 'https://images.unsplash.com/photo-1548932813-3d916ef7c873?q=80&w=1200&auto=format&fit=crop', desc: 'Kepala ikan segar dalam kuah gulai kaya rempah.' },
    { name: 'Ayam Goreng Merdeka', img: 'https://images.unsplash.com/photo-1604904553318-3b138b93cbee?q=80&w=1200&auto=format&fit=crop', desc: 'Ayam goreng renyah, bumbu khas menggugah selera.' },
    { name: 'Dendeng Batokok', img: 'https://images.unsplash.com/photo-1617195737490-df185b05c7ab?q=80&w=1200&auto=format&fit=crop', desc: 'Dendeng tipis pedas dengan sambal lado.' },
    { name: 'Nasi Rames', img: 'https://images.unsplash.com/photo-1604904553188-c13905c1c2d3?q=80&w=1200&auto=format&fit=crop', desc: 'Paket lengkap pilihan lauk Padang.', badge: 'Signature Dish' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Menu Kami</h2>
        <p className="text-gray-600 mt-2">Enam sajian favorit yang wajib dicoba.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((m) => (
            <div key={m.name} className="bg-white rounded-xl shadow overflow-hidden border">
              <div className="relative">
                <img src={m.img} alt={m.name} className="h-48 w-full object-cover" />
                {m.badge && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {m.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{m.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutletSection() {
  const outlets = useMemo(
    () => [
      { name: 'Padang Merdeka - Jakarta Pusat', city: 'Jakarta', type: 'A', address: 'Jl. Merdeka No. 1, Gambir, Jakarta Pusat', phone: '+62211234567', map: 'https://maps.google.com/?q=Jakarta%20Pusat' },
      { name: 'Padang Merdeka - Jakarta Selatan', city: 'Jakarta', type: 'B', address: 'Jl. Antasari No. 8, Jakarta Selatan', phone: '+62211234568', map: 'https://maps.google.com/?q=Jakarta%20Selatan' },
      { name: 'Padang Merdeka - Bandung', city: 'Bandung', type: 'B', address: 'Jl. Asia Afrika No. 10, Bandung', phone: '+622287654321', map: 'https://maps.google.com/?q=Bandung' },
      { name: 'Nasi Kapau Merdeka - Surabaya', city: 'Surabaya', type: 'C', address: 'Jl. Tunjungan No. 5, Surabaya', phone: '+62315551234', map: 'https://maps.google.com/?q=Surabaya' },
    ],
    []
  );

  const cities = useMemo(() => ['Semua', ...Array.from(new Set(outlets.map((o) => o.city)))], [outlets]);
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('Semua');

  const filtered = outlets.filter((o) => {
    const matchCity = city === 'Semua' || o.city === city;
    const matchKey = keyword === '' || `${o.name} ${o.address}`.toLowerCase().includes(keyword.toLowerCase());
    return matchCity && matchKey;
  });

  return (
    <div id="outlet" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Outlet Kami</h2>
            <p className="text-gray-600 mt-2">Temukan lokasi Padang Merdeka dan Nasi Kapau Merdeka.</p>
          </div>
          <a href="#franchise" className="text-red-700 font-semibold hover:underline">Info Franchise</a>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden shadow border">
              <iframe
                title="Peta Outlet"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126908.29405054477!2d106.76887795!3d-6.22972845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f157afbb0f05%3A0x301576d14feb8f0!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Cari nama atau alamat..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <select
                className="border rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <ul className="divide-y">
              {filtered.map((o) => (
                <li key={o.name} className="py-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Building2 className="text-red-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{o.name}</h4>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">Tipe {o.type}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{o.address}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <a className="text-red-700 hover:underline inline-flex items-center gap-1" href={`tel:${o.phone}`}>
                          <Phone size={16} /> Telp
                        </a>
                        <a className="text-gray-700 hover:underline inline-flex items-center gap-1" href={o.map} target="_blank" rel="noreferrer">
                          <MapPin size={16} /> Map
                        </a>
                        <span className="text-gray-500">{o.city}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FranchiseSection() {
  return (
    <div id="franchise" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Bergabung Bersama Kami</h2>
            <p className="text-gray-600 mt-3">Mari bermitra dan bawa cita rasa Padang Merdeka ke lebih banyak kota. Lokasi yang kami sukai: area komersial strategis, akses mudah, visibilitas tinggi, dan parkir memadai.</p>

            <div className="mt-6 bg-white rounded-xl shadow border p-5">
              <h3 className="font-semibold text-gray-900">Contact Person</h3>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li><span className="font-medium">CP:</span> Syerly A. Sardjono</li>
                <li><span className="font-medium">Telepon:</span> <a className="text-red-700 hover:underline" href="tel:+62811188167">0811 - 1881 - 67</a></li>
                <li><span className="font-medium">Email:</span> <a className="text-red-700 hover:underline" href="mailto:sardjono.syerly@gmail.com">sardjono.syerly@gmail.com</a> | <a className="text-red-700 hover:underline" href="mailto:info@padangmerdeka.com">info@padangmerdeka.com</a></li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="font-semibold text-gray-900">Formulir Kemitraan</h3>
            <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input required type="text" placeholder="Nama Lengkap" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="email" placeholder="Email" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
                <input required type="tel" placeholder="Nomor Telepon" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <input type="text" placeholder="Kota / Lokasi yang Diinginkan" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
              <textarea rows={4} placeholder="Ceritakan rencana lokasi dan pengalaman Anda" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md">Kirim</button>
              <p className="text-xs text-gray-500">Dengan mengirimkan formulir ini, Anda menyetujui untuk dihubungi oleh tim kami.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
