"use client";

import React from 'react';
import Head from 'next/head';
import { ChevronRight, FileText } from 'lucide-react';

export default function LPMD() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Lembaga Pemberdayaan Masyarakat Desa - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Lembaga Pemberdayaan Masyarakat Desa (LPMD) Desa Tawangharjo - Peran Strategis dalam Pemberdayaan Masyarakat dan Pembangunan Desa"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lembaga Pemberdayaan Masyarakat Desa (LPMD)
            </h1>
            <p className="text-xl md:text-2xl">
              Peran Strategis dalam Pemberdayaan Masyarakat dan Pembangunan Desa
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Definition Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Definisi LPMD</h2>
            <p className="text-gray-600 text-lg">
              Lembaga Pemberdayaan Masyarakat Desa (LPMD) adalah organisasi yang berfokus pada peningkatan kapasitas masyarakat desa melalui pelatihan, pendampingan, dan pemberdayaan ekonomi lokal untuk mewujudkan pembangunan yang berkelanjutan.
            </p>
          </div>
        </section>

        {/* Functions Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Fungsi LPMD</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Menyusun program pemberdayaan masyarakat desa',
              'Mengadakan pelatihan dan pendampingan untuk peningkatan kapasitas masyarakat',
              'Mengoptimalkan potensi lokal melalui kegiatan ekonomi kreatif'
            ].map((functionItem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="ml-4 text-gray-600">{functionItem}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tasks and Rights */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Tasks */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tugas LPMD</h2>
            <ul className="space-y-4">
              {[
                'Menggali potensi dan aspirasi masyarakat',
                'Merancang program peningkatan kapasitas masyarakat',
                'Melaksanakan pelatihan dan pendampingan',
                'Memfasilitasi akses ke sumber daya dan modal usaha',
                'Menggalang kerja sama dengan lembaga eksternal',
                'Mengawasi pelaksanaan program pemberdayaan',
                'Melakukan evaluasi dan monitoring program'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Rights */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Hak LPMD</h2>
            <ul className="space-y-4">
              {[
                'Mendapatkan dukungan dari pemerintah desa dalam pelaksanaan program',
                'Mengakses anggaran desa untuk kegiatan pemberdayaan',
                'Menjalin kerja sama dengan instansi pemerintah dan swasta',
                'Menerima pelatihan dan pengembangan kapasitas dari lembaga terkait'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Documents Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Dokumen Terkait</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">SK Pembentukan LPMD</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Surat Keputusan pembentukan Lembaga Pemberdayaan Masyarakat Desa (LPMD) Desa Tawangharjo Kecamatan Giriwoyo
                Kabupaten Wonogiri Masa Bakti 2020-2024
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="text-gray-500">Nomor 12 Tahun 2024</span>
              </div>
              <a
                href="SK_LPMD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <FileText className="h-5 w-5 mr-2" />
                Unduh Dokumen
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
