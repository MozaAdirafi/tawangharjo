import React from "react";
import { Calendar, User, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";


// Shared styled card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);


const NewsPage = () => {

  const news = [
    {
      id: 1,
      title: "Pelantikan BPD Desa Tawangharjo",
      author: "Tim SID, Tawangharjo",
      date: "14 Januari 2025",
      image: '/News_Pelantikan.jpeg',
      excerpt:
        "Desa Tawangharjo baru-baru ini mengadakan acara pelantikan anggota Badan Permusyawaratan Desa (BPD) yang baru dalam rangka pergantian antar waktu (PAW)...",
    },
    {
      id: 2,
      title: "Penyerahan Laptop Untuk Guru PAUD Desa Tawangharjo",
      author: "Siti Nuryani, Tawangharjo",
      date: "13 Mei 2024",
      image: '/News_Pemdes.jpeg',
      excerpt:
        "Pemerintah Desa Tawangharjo secara resmi menyerahkan satu unit laptop kepada Tendik PAUD Kasih Ibu pada hari Senin, 13 Mei 2024...",
    },
    {
      id: 3,
      title: "Pemdes Pandansari Salurkan BLT Dana Desa Tahun Anggaran 2024",
      author: "Siti Nuryani, Tawangharjo",
      date: "10 Mei 2024",
      image: '/News_Penyerahan.jpeg',
      excerpt:
        "Program Bantuan Langsung Tunai Dana Desa tahun 2024 telah disalurkan kepada warga yang memenuhi kriteria...",
    },
    {
      id: 4,
      title: "Pertandingan Persahabatan SSB Tawangharjo Vs SSB Baturetno Berlangsung Seru dan Meriah..",
      author: "Siti Nuryani, Tawangharjo",
      date: "05 Mei 2024",
      image: '/News_Pertandingan.jpeg',
      excerpt:
        "WONOGIRI, 05 Mei 2024, Sekolah Sepak Bola (SSB) Desa Tawangharjo dan SBB Baturetno   menggelar pertandingan persahabatan di Lapangan Desa Selomarto, Minggu (5/5/2024)......",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Berita Terbaru</h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Informasi terkini seputar Desa Tawangharjo
          </p>
        </div>

        {/* Enhanced News Grid */}
        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id}>
              <div className="md:flex group">
                <div className="md:w-1/3 lg:w-1/4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 md:h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 lg:w-3/4 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-green-600" />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      {item.date}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group"
                  >
                    Baca Selengkapnya
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
