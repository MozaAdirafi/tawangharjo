import React from 'react';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const NewsDetailPage = ({ params }) => {
  // Sample news data array
  const newsCollection = [
    {
      id: '1',
      title: "Pelantikan Anggota BPD Pergantian Antar Waktu di Desa Tawangharjo, Harapan Baru untuk Pembangunan Desa.",
      author: "Tim SID Desa Tawangharjo",
      date: "14 Januari 2025",
      content: `GIRIWOYO, 14 Januari 2024, DesaTawangharjo baru-baru ini mengadakan acara pelantikan anggota Badan Permusyawaratan Desa (BPD) yang baru dalam rangka pergantian antar waktu (PAW). Acara ini dilaksanakan di Balai Desa Tawangharjo dan dihadiri oleh berbagai pihak, termasuk Bapak Camat Giriwoyo Sri Sundor, S.Sos., M.Si, .Kepala Desa Tawangharjo, perangkat desa, tokoh masyarakat, serta warga setempat. Pelantikan ini menjadi momen penting bagi kelangsungan tugas BPD dalam mendukung jalannya pemerintahan desa.

      Kepala Desa Tawangharjo, Tri Yatmoko, dalam sambutannya menyampaikan bahwa pelantikan ini bertujuan untuk menggantikan anggota BPD yang mengundurkan diri atau tidak dapat melanjutkan tugasnya karena alasan tertentu. Beliau juga menekankan pentingnya fungsi BPD sebagai lembaga yang menjadi jembatan antara pemerintah desa dan masyarakat. Kepala desa berharap anggota BPD yang baru dapat bekerja dengan penuh amanah dan dedikasi, serta senantiasa mengutamakan kepentingan masyarakat desa dalam setiap kebijakan yang diambil.

      Adapun anggota BPD yang dilantik dalam PAW kali ini adalahTriyanto perwakilan Dusun Mojosawit. Anggota BPD ini dilantik untuk menggantikan anggota sebelumnya yang mengundurkan diri akibat alasan pribadi dan pekerjaan. Setelah pelantikan, anggota BPD yang baru dilantik mengucapkan sumpah jabatan dengan penuh semangat dan komitmen untuk menjalankan tugasnya dengan baik.`,
      image: '/News_Pelantikan.jpeg'
    },
    {
      id: '2',
      title: "Penyerahan Laptop Untuk Guru PAUD dari Pemerintah Desa Tawangharjo",
      author: "Admin Desa, Tawangharjo",
      date: "13 Mei 2024",
      content: `Pemerintah Desa Tawangharjo secara resmi menyerahkan satu unit laptop kepada Tendik PAUD Kasih Ibu pada hari Senin, 13 Mei 2024. Penyerahan laptop ini merupakan bagian dari pengadaan perangkat teknologi untuk mendukung kegiatan pendidikan di tingkat PAUD, yang dibiayai melalui Dana Desa tahun 2024.

      Pengadaan laptop untuk Kasih Ibu merupakan langkah nyata pemerintah setempat dalam mendukung kemajuan sektor pendidikan di Desa Tawangharjo. Dengan menggunakan dana desa, pemerintah berharap dapat meningkatkan aksesibilitas teknologi di lingkungan PAUD, sehingga proses pembelajaran menjadi lebih interaktif dan informatif.

      Kepala Desa Tawangharjo, Triyatmoko menyampaikan, "Penyerahan laptop ini adalah komitmen kami untuk meningkatkan kualitas pendidikan di Desa Tawangharjo, khususnya di tingkat PAUD. Dengan dukungan perangkat teknologi seperti laptop, diharapkan proses pembelajaran menjadi lebih efektif dan modern."`,
      image: '/News_Pemdes.jpeg'
    },
    {
      id: '3',
      title: "Pemdes Tawangharjo Salurkan BLT Dana Desa Tahun Anggaran 2024",
      author: "Siti Nuryani, Tawangharjo",
      date: "08 Mei 2024",
      content: `TAWANGHARJO NEWS | GIRIWOYO - Dalam rangka membantu mengurangi beban masyarakat, Pemerintah Desa Tawangharjo, Kecamatan Giriwoyo, Kabupaten Wonogiri, menyalurkan BLT Dana Desa tahun anggaran 2024 pada Rabu (08/05/2024).

      Bantuan tersebut disalurkan kepada 20 penerima. Dimana setiap penerima masing-masing menerima batuan sebesar Rp 300.000,- (Tiga ratus ribu rupiah). Penyaluran BLT DD ini juga dihadiri oleh Jajaran Pemerintah Desa Tawangharjo.

      Kepala Desa Tawangharjo, Tri Yatmoko yang diwakili oleh Sekertaris Desa Tawangharjo, Dwi Handoko menyampaikan "Pembagian BLT DD tahun anggaran 2024 ini ada 30 penerima, dan insyaallah sudah tepat sasaran kepada warga yang kurang mampu. Masing-masing menerima Rp 300.000,- (Tiga ratus ribu rupiah)."`,
      image: '/News_Penyerahan.jpeg'
    },
    {
      id: '4',
      title: "Pertandingan Persahabatan SSB Tawangharjo Vs SSB Baturetno Berlangsung Seru dan Meriah",
      author: "Siti Nuryani, Tawangharjo",
      date: "05 Mei 2024",
      content: `WONOGIRI, 05 Mei 2024, Sekolah Sepak Bola (SSB) Desa Tawangharjo dan SBB Baturetno menggelar pertandingan persahabatan di Lapangan Desa Selomarto, Minggu (5/5/2024).

      Selain untuk memupuk persahabatan, pertandingan ini bagian dari program besar agar sepakbola Indonesia di masa mendatang menjadi semakin maju, berkembang dan berkualitas. Pertandingan pun semakin meriah karena dihadiri para orang tua siswa SSB.`,
      image: '/News_Pertandingan.jpeg'
    }
  ];

  const newsData = newsCollection.find(news => news.id === params.slug);
  
  if (!newsData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link href="/" className="text-green-600 hover:text-green-700">
            Beranda
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/news" className="text-green-600 hover:text-green-700">
            Berita Terbaru
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-600">{newsData.title}</span>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative w-full aspect-[16/9]">
            <img
              src={newsData.image}
              alt={newsData.title}
              className="absolute inset-0 w-full h-full object-contain bg-gray-100"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {newsData.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {newsData.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {newsData.date}
              </div>
            </div>

            <div className="prose max-w-none">
              {newsData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Navigation between articles */}
        <div className="mt-8 flex justify-between">
          <Link 
            href="/news"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Kembali ke Berita Terbaru
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;