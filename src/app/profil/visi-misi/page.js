import React from 'react';
import Head from 'next/head';

export default function VisiMisi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Visi Misi Desa Tawangharjo</title>
        <meta name="description" content="Visi dan Misi Desa Tawangharjo Kecamatan Giriwoyo" />
      </Head>

      {/* Tagline Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            MEMBANGUN WONOGIRI SUKSES, BERIMAN, BERBUDAYA, BERKEADILAN, BERDAYA SAING, DAN DEMOKRATIS
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-600 pb-3">
              Visi dan Misi Desa Tawangharjo
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-700">Visi</h3>
              <p className="text-gray-700 italic">
                "Bekerja dan berpikir bersama warga"
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-700">Misi</h3>
              <p className="text-gray-600 mb-4">
                Untuk mewujudkan visi Desa Tawangharjo Kecamatan Giriwoyo Kabupaten Wonogiri, 
                maka dijabarkan dalam misi yang menjadi pedoman bagi pembangunan Desa Tawangharjo, yaitu:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Menjalankan urusan Pemerintahan, Pembangunan dan Kemasyarakatan dengan 
                  mengutamakan keselarasan serta keseimbangan.
                </li>
                <li>
                  Mengembangkan semangat perjuangan dan pengabdian sebagai sendi utama 
                  pelaksanaan pemerintahan berdasar asas kebersamaan.
                </li>
                <li>
                  Menjaga kondisi dinamis masyarakat demi keutuhan dan kebersamaan dari 
                  berbagai aspek kehidupan.
                </li>
                <li>
                  Memberdayakan fungsi kelembagaan untuk membantu kelancaran jalannya 
                  Pemerintah Desa.
                </li>
                <li>
                  Bersama membangun Desa Tawangharjo secara sinergi dengan Pemerintah 
                  Kabupaten, Propinsi, dan Pemerintah Pusat dari aspek Ideologi, Ekonomi, 
                  Sosial Budaya, Agama, dan Pertahanan Keamanan.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}