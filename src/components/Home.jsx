import { Award, CheckCircle, Flame, Star } from 'lucide-react';

export default function Home() {
  return (
    <section id="beranda" className="pt-20">
      <Hero />
      <BrandStory />
      <CoreValues />
      <SignatureDishes />
      <Awards />
    </section>
  );
}

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/0" />
      <img
        src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop"
        alt="Padang Merdeka hero background"
        className="w-full h-[70vh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Padang Merdeka
        </h1>
        <p className="mt-3 text-white/90 text-lg md:text-xl">#SekaliPadangTetapMerdeka</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="#menu" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold shadow">Lihat Menu</a>
          <a href="#outlet" className="bg-white/90 hover:bg-white text-red-700 px-6 py-3 rounded-md font-semibold shadow">Temukan Outlet</a>
        </div>
      </div>
    </div>
  );
}

function BrandStory() {
  return (
    <div id="tentang" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Perayaan Rasa dan Budaya Indonesia</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Didirikan untuk merayakan kekayaan kuliner Minang, kami menghadirkan pengalaman bersantap yang hangat,
            autentik, dan modern. Setiap sajian kami adalah persembahan untuk Nusantara—dimasak dengan bumbu yang kaya,
            bahan pilihan, dan konsistensi rasa yang terjaga.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Misi kami sederhana: menghadirkan cita rasa Padang yang membanggakan, dalam suasana kontemporer yang
            menonjolkan semangat merah-putih.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
            alt="Interior restoran modern kontemporer"
            className="rounded-xl shadow-lg object-cover w-full h-72"
          />
          <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded shadow flex items-center gap-2">
            <Flame size={18} /> Sejak 2019
          </div>
        </div>
      </div>
    </div>
  );
}

function CoreValues() {
  const values = [
    { title: 'Authenticity', desc: 'Resep turun-temurun dengan sentuhan modern.', icon: CheckCircle },
    { title: 'Hospitality', desc: 'Layanan hangat khas Indonesia.', icon: Star },
    { title: 'Quality', desc: 'Bahan segar dan proses higienis.', icon: CheckCircle },
    { title: 'Consistency', desc: 'Rasa yang stabil di setiap outlet.', icon: CheckCircle },
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 to-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-gray-900">Nilai Inti Kami</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-lg shadow p-5 border border-red-100">
              <v.icon className="text-red-600" />
              <h4 className="mt-3 font-semibold text-gray-900">{v.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SignatureDishes() {
  const items = [
    {
      name: 'Ayam Pop',
      img: 'https://images.unsplash.com/photo-1544025168-76bc3997d9ea?q=80&w=1200&auto=format&fit=crop',
      desc: 'Ayam khas Minang yang lembut dengan kuah gurih.',
    },
    {
      name: 'Rendang',
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
      desc: 'Daging sapi dimasak lama dengan rempah premium hingga meresap.',
      label: "CNN's World’s 50 best foods",
    },
    {
      name: 'Nasi Rames',
      img: 'https://images.unsplash.com/photo-1604904553188-c13905c1c2d3?q=80&w=1200&auto=format&fit=crop',
      desc: 'Nasi lengkap dengan lauk pilihan khas Padang.',
      label: 'Signature Dish',
    },
    {
      name: 'Dendeng Batokok',
      img: 'https://images.unsplash.com/photo-1617195737490-df185b05c7ab?q=80&w=1200&auto=format&fit=crop',
      desc: 'Irisan daging tipis berbumbu dengan sensasi pedas nikmat.',
    },
  ];

  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Menu Andalan</h3>
            <p className="text-gray-600 mt-1">Pilihan terbaik dari dapur kami.</p>
          </div>
          <a href="#menu" className="text-red-700 font-semibold hover:underline">Lihat Semua Menu</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.name} className="group bg-white rounded-xl overflow-hidden shadow border">
              <div className="relative">
                <img src={it.img} alt={it.name} className="h-44 w-full object-cover group-hover:scale-105 transition-transform" />
                {it.label && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {it.label}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900">{it.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Awards() {
  return (
    <div className="bg-red-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <Award size={36} />
        <div>
          <p className="text-sm uppercase tracking-wide/loose">Penghargaan</p>
          <h4 className="text-xl font-bold">TOP 40 JAKARTA BEST EATS 2019</h4>
          <p className="text-white/90 text-sm mt-1">Apresiasi atas konsistensi rasa dan pengalaman bersantap.</p>
        </div>
      </div>
    </div>
  );
}
