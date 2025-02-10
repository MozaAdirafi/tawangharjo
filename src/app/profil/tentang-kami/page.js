import React from 'react';
import Head from 'next/head';
import { ChevronRight } from 'lucide-react';

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Tentang Kami - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Mewujudkan Modernisasi Tatakelola Desa Melalui Pengembangan Platform Tata Kelola Desa"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-700">
        {/* <img
          src="/api/placeholder/1920/600"
          alt="PTKD Header"
          className="w-full h-full object-cover opacity-70"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Platform Tata Kelola Desa (PTKD)</h1>
            <p className="text-xl md:text-2xl">
              Mewujudkan Modernisasi Tatakelola Desa Melalui Pengembangan Platform Tata Kelola Desa
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Purpose Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Maksud Pengembangan PTKD</h2>
            <p className="text-gray-600 text-lg">
              Penyediaan media dalam memperoleh, mengelola dan menyajikan data serta informasi desa dan kawasan perdesaan.
            </p>
          </div>
        </section>

        {/* Goals Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Tujuan Pengembangan PTKD</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Meningkatkan kualitas perencanaan dan perumusan kebijakan pembangunan desa dan kawasan perdesaan.',
              'Mengefektifkan pelaksanaan kebijakan, program dan kegiatan pembangunan desa dan kawasan perdesaan yang dilakukan oleh Pemerintah Desa.',
              'Meningkatkan kualitas pelayanan dan memberikan manfaat yang sebesar-besarnya bagi masyarakat dan pihak yang berkepentingan.',
              'Mengukur dan memberikan penilaian secara obyektif terhadap kemajuan dan pencapaian strategi pembangunan di desa dan kawasan perdesaan.'
            ].map((goal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="ml-4 text-gray-600">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Functions and Benefits */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Functions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Fungsi PTKD</h2>
            <ul className="space-y-4">
              {[
                'Untuk mengelola data desa',
                'Informasi dan komunikasi pemerintahan desa',
                'Pelayanan administrasi dan pengelolaan keuangan desa',
                'Pengelolaan informasi sumber daya dan potensi kawasan perdesaan'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Manfaat PTKD</h2>
            <ul className="space-y-4">
              {[
                'Memudahkan Pemerintah Desa dalam mengakses, menyimpan dan mengolah data desa',
                'Meningkatkan kualitas pengelolaan data desa yang akurat',
                'Memperluas jangkauan informasi',
                'Meningkatkan kualitas pelayanan administrasi',
                'Meningkatkan akuntabilitas dan transparansi'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Position Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Kedudukan PTKD</h2>
          <div className="space-y-4 text-gray-600">
            <p>PTKD merupakan sistem informasi yang diterapkan di tingkat desa, dikembangkan oleh Pemerintah Daerah dan terintegrasi melalui sistem informasi yang ada di tingkat Daerah.</p>
            <p>PTKD dikelola oleh Pemerintah Desa secara daring dan merupakan satu-satunya sistem informasi yang diterapkan oleh Pemerintah Desa.</p>
            <p>PTKD menjadi sistem pendukung yang mudah dan akurat untuk pengelolaan sumber daya desa secara berkelanjutan.</p>
          </div>
        </section>
      </main>
    </div>
  );
}