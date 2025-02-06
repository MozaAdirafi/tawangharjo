import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';

const NewsPage = () => {
  const news = [
    {
      id: 1,
      title: 'Pelantikan BPD Desa Tawangharjo',
      author: 'Tim SID, Tawangharjo',
      date: '14 Januari 2024',
      image: '/api/placeholder/800/400',
      excerpt: 'Desa Tawangharjo baru-baru ini mengadakan acara pelantikan anggota Badan Permusyawaratan Desa (BPD) yang baru dalam rangka pergantian antar waktu (PAW)...'
    },
    {
      id: 2,
      title: 'Penyerahan Laptop Untuk Guru PAUD Desa Tawangharjo',
      author: 'Siti Nuryani, Tawangharjo',
      date: '13 Mei 2024',
      image: '/api/placeholder/800/400',
      excerpt: 'Pemerintah Desa Tawangharjo secara resmi menyerahkan satu unit laptop kepada Tendik PAUD Kasih Ibu pada hari Senin, 13 Mei 2024...'
    },
    {
      id: 3,
      title: 'Pemdes Pandansari Salurkan BLT Dana Desa Tahun Anggaran 2024',
      author: 'Admin Desa',
      date: '10 Mei 2024',
      image: '/api/placeholder/800/400',
      excerpt: 'Program Bantuan Langsung Tunai Dana Desa tahun 2024 telah disalurkan kepada warga yang memenuhi kriteria...'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Berita Terbaru</h1>
          <p className="text-gray-600 mt-2">Informasi terkini seputar Desa Tawangharjo</p>
        </div>

        {/* News Grid */}
        <div className="space-y-8">
          {news.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-green-600 hover:text-green-700 flex items-center text-sm font-medium">
                    Baca Selengkapnya
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">1</button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;