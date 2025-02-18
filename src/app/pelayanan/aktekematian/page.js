"use client";
import React, { useState } from 'react';
import Head from 'next/head';

export default function AktaKematian() {
  const [activeTab, setActiveTab] = useState('reguler');

  const requirements = {
    common: [
      {
        title: 'KK Asli',
        details: [
          'Dokumen asli harus dibawa/discan',
          'Pemeriksaan kesesuaian data'
        ]
      },
      {
        title: 'Fotocopy KTP Penduduk yang Meninggal',
        details: [
          'Fotokopi yang jelas dan dapat terbaca',
          'Menunjukkan data kependudukan lengkap'
        ]
      },
      {
        title: 'Surat Keterangan Kematian dari Kepala Desa/Lurah',
        details: [
          'Surat keterangan resmi dari pemerintah',
          'Berisi detail kematian yang lengkap'
        ]
      },
      {
        title: 'Fotocopy KTP 2 Orang Saksi',
        details: [
          'Minimal 2 saksi dengan usia di atas 21 tahun',
          'Fotokopi KTP saksi yang jelas'
        ]
      }
    ]
  };

  const procedures = {
    reguler: [
      'Pemohon mengambil nomor antrian di loket pelayanan.',
      'Menuju loket front office sesuai panggilan nomor antrian.',
      'Front office melakukan verifikasi dan penginputan di aplikasi loket antrian dan SIAK.',
      'Berkas diteruskan untuk validasi oleh kasi pencatatan sipil.',
      {
        text: 'Pemeriksaan kelengkapan persyaratan:',
        subItems: [
          'Berkas yang memenuhi syarat akan diteruskan',
          'Berkas tidak lengkap akan dikembalikan untuk dilengkapi'
        ]
      },
      'Produksi melakukan pencetakan dokumen sesuai nomor antrian.',
      'Dokumen dicetak ditandatangani oleh kepala dinas.',
      'Dokumen diserahkan ke bagian pengambilan berkas.',
      'Pemohon dapat mengambil dokumen Akta Kematian.'
    ],
    online: [
      'Unduh dan instal aplikasi "Telunjuk Sakti Disdukcapil Wonogiri" dari Play Store.',
      {
        text: 'Proses pengiriman berkas:',
        subItems: [
          'Scan berkas asli',
          'Kirim melalui aplikasi "Telunjuk Sakti"',
          'Atau melalui loket online desa/kelurahan/kecamatan'
        ]
      },
      'Front Office (FO) dinas memverifikasi berkas dan menginput data ke SIAK.',
      'Draft Akta Kematian divalidasi oleh Kasi yang menangani.',
      'Draft valid masuk antrian cetak di bagian produksi.',
      'Bagian produksi mencetak dokumen sesuai nomor antrian.',
      'Dokumen ditandatangani oleh kepala dinas.',
      'Petugas menyerahkan Kutipan Akta Kematian kepada pemohon.'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Layanan Akta Kematian - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Informasi lengkap tentang pembuatan dan pengurusan Akta Kematian di Desa Tawangharjo"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Layanan Akta Kematian</h1>
          <p className="text-xl text-center text-green-100">
            Informasi lengkap tentang prosedur dan persyaratan pengurusan Akta Kematian
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('reguler')}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'reguler'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reguler
            </button>
            <button
              onClick={() => setActiveTab('online')}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'online'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Online
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Persyaratan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Persyaratan</h2>
            <ul className="space-y-6">
              {requirements.common.map((req, index) => (
                <li key={index} className="space-y-2">
                  <div className="flex items-start">
                    <span className="ml-4 text-gray-600 font-medium">{req.title}</span>
                  </div>
                  <ul className="ml-10 space-y-1">
                    {req.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-600 list-disc ml-4">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Prosedur Pelaksanaan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Prosedur Pelaksanaan {activeTab === 'reguler' ? 'Reguler' : 'Online'}
            </h2>
            <ol className="space-y-4">
              {procedures[activeTab].map((proc, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <div className="ml-4 space-y-2">
                    <span className="text-gray-600">
                      {typeof proc === 'string' ? proc : proc.text}
                    </span>
                    {proc.subItems && (
                      <ul className="ml-4 space-y-1">
                        {proc.subItems.map((item, subIndex) => (
                          <li key={subIndex} className="text-gray-600 list-disc ml-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}