import React from "react";
import { Menu, Search, ChevronRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  const news = [
    {
      id: 1,
      title: "Pelantikan BPD Desa Tawangharjo",
      author: "Tim SID, Tawangharjo",
      date: "14 Januari 2024",
      image: "/News_Pelantikan.jpeg",
      excerpt:
        "Desa Tawangharjo baru-baru ini mengadakan acara pelantikan anggota Badan Permusyawaratan Desa (BPD) yang baru dalam rangka pergantian antar waktu (PAW)...",
    },
    {
      id: 2,
      title: "Penyerahan Laptop Untuk Guru PAUD Desa Tawangharjo",
      author: "Siti Nuryani, Tawangharjo",
      date: "13 Mei 2024",
      image: "/News_Pemdes.jpeg",
      excerpt:
        "Pemerintah Desa Tawangharjo secara resmi menyerahkan satu unit laptop kepada Tendik PAUD Kasih Ibu pada hari Senin, 13 Mei 2024...",
    },
    {
      id: 3,
      title: "Pemdes Pandansari Salurkan BLT Dana Desa Tahun Anggaran 2024",
      author: "Siti Nuryani, Tawangharjo",
      date: "10 Mei 2024",
      image: "/News_Penyerahan.jpeg",
      excerpt:
        "Program Bantuan Langsung Tunai Dana Desa tahun 2024 telah disalurkan kepada warga yang memenuhi kriteria...",
    },
    {
      id: 4,
      title:
        "Pertandingan Persahabatan SSB Tawangharjo Vs SSB Baturetno Berlangsung Seru dan Meriah..",
      author: "Siti Nuryani, Tawangharjo",
      date: "05 Mei 2024",
      image: "/News_Pertandingan.jpeg",
      excerpt:
        "WONOGIRI, 05 Mei 2024, Sekolah Sepak Bola (SSB) Desa Tawangharjo dan SBB Baturetno   menggelar pertandingan persahabatan di Lapangan Desa Selomarto, Minggu (5/5/2024)......",
    },
  ];

  const services = [
    {
      name: "Kartu Keluarga",
      path: "/pelayanan/kartukeluarga",
      description: "Informasi dan layanan kartu keluarga untuk warga desa",
    },
    {
      name: "E-KTP",
      path: "/pelayanan/e-ktp",
      description: "Informasi dan layanan e-ktp untuk warga desa",
    },
    {
      name: "KIA",
      path: "/pelayanan/kia",
      description: "Informasi dan layanan kia untuk warga desa",
    },
    {
      name: "Akte Kelahiran",
      path: "/pelayanan/aktekelahiran",
      description: "Informasi dan layanan akte kelahiran untuk warga desa",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      {/* <nav className="bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img
                src="/api/placeholder/40/40"
                alt="Logo Desa"
                className="h-10 w-10"
              />
              <span className="font-semibold text-lg">DESA TAWANGHARJO</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-green-200">
                Beranda
              </a>
              <Link href="/news" className="hover:text-green-200">
                Berita Terbaru
              </Link>
              <a href="#" className="hover:text-green-200">
                Pelayanan
              </a>
              <a href="#" className="hover:text-green-200">
                Informasi Publik
              </a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="pl-3 pr-10 py-1 rounded-full text-black text-sm"
                />
                <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <img
          src="/Mainpage_Background.jpeg"
          alt="Desa Tawangharjo"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Selamat Datang di Desa Tawangharjo
            </h1>
            <p className="text-xl mb-8">
              Desa Tawangharjo Yang Maju dan Mandiri, Go Nyawiji Sesarengan
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
              Jelajahi
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Berita Terbaru</h2>
            <Link
              href="/news"
              className="text-green-600 hover:text-green-700 flex items-center"
            >
              Lihat Semua Berita
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-46">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 h-14">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="truncate">{item.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-green-600 hover:text-green-700 flex items-center text-sm"
                  >
                    Baca Selengkapnya
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Layanan Desa</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.path}
                  className="text-green-600 hover:text-green-700 flex items-center"
                >
                  Selengkapnya
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Desa Tawangharjo</h3>
              <p className="text-gray-400">
                Kecamatan Giriwoyo, Kabupaten Wonogiri Mbangun Wonogiri
                <br />
                Provinsi Jawa Tengah
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontak</h3>
              <p className="text-gray-400">
                Email: info@desatawangharjo.go.id
                <br />
                Telp: (0123) 456789
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 Desa Tawangharjo. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomePage;
