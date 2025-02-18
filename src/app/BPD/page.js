"use client";

import React from 'react';
import Head from 'next/head';
import { ChevronRight, FileText } from 'lucide-react';

export default function BPD() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Badan Permusyawaratan Desa - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Badan Permusyawaratan Desa (BPD) Desa Tawangharjo - Mitra Pemerintah Desa dalam Pembangunan dan Kesejahteraan Masyarakat"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[40vh] bg-green-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Badan Permusyawaratan Desa (BPD)</h1>
            <p className="text-xl md:text-2xl">
              Mitra Strategis Pemerintah Desa dalam Mewujudkan Tata Kelola Pemerintahan yang Baik
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Definition Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Definisi BPD</h2>
            <p className="text-gray-600 text-lg">
              Badan Permusyawaratan Desa adalah lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk Desa berdasarkan keterwakilan wilayah dan ditetapkan secara demokratis.
            </p>
          </div>
        </section>

        {/* Functions Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Fungsi BPD</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Membahas dan menyepakati Rancangan Peraturan Desa bersama Kepala Desa',
              'Menampung dan menyalurkan aspirasi masyarakat Desa',
              'Melakukan pengawasan kinerja Kepala Desa'
            ].map((function_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="ml-4 text-gray-600">{function_}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tasks and Rights */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Tasks */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tugas BPD</h2>
            <ul className="space-y-4">
              {[
                'Menggali aspirasi masyarakat',
                'Menampung aspirasi masyarakat',
                'Mengelola aspirasi masyarakat',
                'Menyalurkan aspirasi masyarakat',
                'Menyelenggarakan musyawarah BPD',
                'Menyelenggarakan musyawarah Desa',
                'Membentuk panitia pemilihan Kepala Desa',
                'Menyelenggarakan musyawarah Desa khusus untuk pemilihan Kepala Desa antarwaktu'
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Hak BPD</h2>
            <ul className="space-y-4">
              {[
                'Mengawasi dan meminta keterangan tentang penyelenggaraan Pemerintahan Desa kepada Pemerintah Desa',
                'Menyatakan pendapat atas penyelenggaraan Pemerintahan Desa, pelaksanaan pembangunan Desa, pembinaan kemasyarakatan Desa, dan pemberdayaan masyarakat Desa',
                'Mendapatkan biaya operasional pelaksanaan tugas dan fungsinya dari Anggaran Pendapatan dan Belanja Desa',
                'Memperoleh pengembangan kapasitas melalui pendidikan dan pelatihan, sosialisasi, pembimbingan teknis, dan kunjungan lapangan'
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
                <h3 className="text-xl font-semibold text-gray-800">SK Pergantian Antar Waktu (PAW) BPD</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Surat Keputusan Perpanjangan Masa Jabatan anggota Badan Permusyawaratan Desa 
                Se Kecamatan Giriwoyo Masa Bhakti 2018 s.d. 2026.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="text-gray-500">Nomor 144.1/346/HK/2024</span>
              <span className="text-gray-500">Masa Jabatan: 2018-2026</span>
              </div>
              <a
                href="SK_Bupati_BPD_PAW_Des 2024.pdf"
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