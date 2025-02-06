import React from "react";
import { Menu, Search, ChevronRight } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
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
          src="/api/placeholder/1920/1080"
          alt="Desa Tawangharjo"
          className="w-full h-full object-cover opacity-70"
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
          <h2 className="text-3xl font-bold mb-8">Berita Terbaru</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/api/placeholder/400/250"
                  alt="News"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Pelantikan BPD Desa Tawangharjo
                  </h3>
                  <p className="text-gray-600 mb-4">14 Januari 2024</p>
                  <p className="text-gray-700 mb-4">
                    Acara pelantikan anggota Badan Permusyawaratan Desa (BPD)
                    yang baru dalam rangka pergantian antar waktu...
                  </p>
                  <Link
                    href="/news"
                    className="text-green-600 hover:text-green-700 flex items-center"
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
            {["Administrasi", "Kependudukan", "Kesehatan", "Pendidikan"].map(
              (service) => (
                <div
                  key={service}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-600 mb-4">
                    Informasi dan layanan {service.toLowerCase()} untuk warga
                    desa
                  </p>
                  <button className="text-green-600 hover:text-green-700 flex items-center">
                    Selengkapnya
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Desa Tawangharjo</h3>
              <p className="text-gray-400">
                Kecamatan Giriwoyo, Kabupaten Wonogiri
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
      </footer>
    </div>
  );
};

export default HomePage;
